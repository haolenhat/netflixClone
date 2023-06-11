import { useEffect, useState } from 'react';
import NetflixLogo from '../../assets/images/Logonetflix.png'
import { HiSearch } from 'react-icons/hi';
import styled from 'styled-components';
import { useScrollY } from '../hook';
import { useNavigate } from 'react-router-dom';


function Navbar(props) {
    const [scrollY] = useScrollY();
    const [keywords, setKeyWords] = useState('');
    const navigate = useNavigate();
    const handleChangeInput = (e) => {
        let keywords = e.target.value;
        setKeyWords(keywords);
        (keywords.length > 0) 
        ? navigate(`/search/?keywords=${keywords.trim()}`)
        : navigate('/')
    }

    const goHome = () => {  
        navigate('/');
        setKeyWords('');
    }

    return ( 
        <Navigation style={scrollY < 50 ? {backgroundColor: 'transparent'} : {backgroundColor: 'var(--color-backgruond)'}}>
            <div className='navContainer'>
                <div className='logo'>
                    <img src={NetflixLogo} alt=""
                    onClick={goHome}
                    />
                </div>
                <div className='navSearch'>
                    <HiSearch className='iconSearch'/>
                    <input 
                    className='iconSearch'  
                    type="text" 
                    placeholder='Input title, genres, people' 
                    onChange={handleChangeInput}
                    value={keywords}
                    />
                </div>
            </div>
        </Navigation>
     );
}

export default Navbar;


const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    transition-timing-function: ease-in;
    trasintion:all 1s;
    z-index: 21;
    background-color:transparent;

    @media  only screen and (max-width:600px) {
            height: 60px;
            
        }


    .navContainer {
        background-color: var(--color-background);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        flex-direction: row;

        @media  only screen and (max-width:600px) {
            flex-direction: row;
            justify-content: left;
            height: 100%;
        }

        .logo {
            width: 120px;
            cursor: pointer;
            img {
                width:100%;
            }
            padding: 0 20px;
        }

        .navSearch {
            color: var(--color-white);
            padding-right: 20px;
            display: flex;
            justify-content: center ;
            align-items: center;


            &:hover  .iconSearch  {
                color : var(--color-white);
            }

            .iconSearch {
                width:20px;
                height:20px;
                cursor:pointer;
                color:#bbb;
                
            }

            

            input {
                font-size:14px;
                border:1px solid #fff;
                color:var(--color-white);
                outline :none;
                width:1px;
                padding :10px;
                cursor:pointer;
                opacity:0;
                backgruond:#222;
                transition: width 0.5s;
                margin-left:4px;
                
                
                &:focus {
                    padding-left:26px;
                    width:300px;
                    cursor:text;
                    opacity:1;
                    border-radius:4px;
    
                
                }

                



            }


        }
    }
`;