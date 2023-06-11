import React, { useEffect, useState } from "react";
import Intro from "../Intro/Intro";
import Contents from "../Contents/Contents";
import Menus from "../Menus/Menu";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";


function Home() {
    const {MovieDetail} = useSelector(state => state.infoMovies);
    const [isShowMovieeDetail, setIsShowMovieDetail] = useState(false);
    useEffect(()=> {
        setIsShowMovieDetail(MovieDetail ? true : false);
    },[MovieDetail])

    return ( 
        <div>
            <Intro/>
            <Contents/>
            <Menus/>
            <MoviesDetail movie = {MovieDetail} showModal={isShowMovieeDetail}/>
            <Footer/>
        </div>
     );
}

export default Home;