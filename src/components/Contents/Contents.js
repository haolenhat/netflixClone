import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesRow from "./MoviesRow";
import * as ACTIONS from '../store/actions'
import {BsArrowUpCircleFill} from "react-icons/bs"
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { useScrollY } from "../hook";


const ScrollToTop = () => {
    scroll.scrollToTop();
}

function Contents(props) {
    const dispatch = useDispatch();
    const [scrollY] = useScrollY();


    const {NetflixOriginals,
        TrendingMovies,
    TopRateMovies,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
    
    } = useSelector(state => state.infoMovies);
    

    useEffect(() =>{
        dispatch(ACTIONS.getNetflixOriginals());
        dispatch(ACTIONS.getTopRateMovies());
        dispatch(ACTIONS.getTrendingMovies());
        dispatch(ACTIONS.getActionMovies());
        dispatch(ACTIONS.getComedyMovies());
        dispatch(ACTIONS.getHorrorMovies());
        dispatch(ACTIONS.getROMANCEMovies());
        dispatch(ACTIONS.getDocumentaries());
    }, [dispatch]);


    return ( 
        <div>
            <MoviesRow movies={NetflixOriginals} title = "Netflix Originals" isNetflix = {true} idSection = 'netflixMovies'/>
            <MoviesRow movies={TrendingMovies} title = "Trending Movies" isNetflix = {true} idSection ='trendingMovies'/>
            <MoviesRow movies={TopRateMovies} title = "Top Rate Movies" idSection ='topRateMovies'/>
            <MoviesRow movies={ActionMovies} title = "Action Movies" idSection ='actionMovies'/>
            <MoviesRow movies={ComedyMovies} title = "Comedy Movies" idSection ='comedyMovies'/>
            <MoviesRow movies={HorrorMovies} title = "Horror Movies" idSection ='hororMovies'/>
            <MoviesRow movies={RomanceMovies} title = "Romance Movies" idSection ='romanceMovies'/>
            <MoviesRow movies={Documentaries} title = "Documentaries Movies" idSection ='docummentarieMovies'/>
            <GoToTop onClick={ScrollToTop}
                style={{
                    visibility:`${scrollY > 600 ? 'visible' : 'hidden'}`
                }}
            >
                <BsArrowUpCircleFill/>
            </GoToTop>
        </div>
     );
}

export default Contents;

const GoToTop = styled.div`
position: fixed;
z-index:10;
right: 70px;
bottom:50px;
font-size:50px;
color: rgba(255,255,255,0.4);
transition: all 0.3s linear;


&:hover {
    color: rgba(255,255,255,0.8);
    cursor: pointer;
}

@media screen and (max-width: 600px) {
    right: 40px;
}

`