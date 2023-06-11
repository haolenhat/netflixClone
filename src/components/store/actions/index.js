import axios from "axios";
import * as Types from '../types'

const API_KEY = 'ea68eabcb5792fd061e4589c5a1769d0';
const Base_URL = 'https://api.themoviedb.org/3'

export const getNetflixOriginals = () => async dispatch => {
    try {
        const result = await axios.get(
            `${Base_URL}/trending/all/day?api_key=${API_KEY}`
        );;
        dispatch({type : Types.GET_NETFLIX_ORIGINALS, payload:result.data.results});


    }catch (error) {
        console.log('Get Netflix API error: ' ,error)
    }
}

export const getTrendingMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${Base_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        );;
        dispatch({type : Types.GET_TRENDING_MOVIES, payload:result.data.results});


    }catch (error) {
        console.log('Get Trending API error: ' ,error)
    }
}


export const getTopRateMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${Base_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        dispatch({type : Types.GET_TOP_RATE_MOVIES, payload:result.data.results});


    }catch (error) {
        console.log('Get Top Rate API error: ' ,error)
    }
}

export const getActionMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${Base_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        );
        dispatch({type : Types.GET_ACTION_MOVIES, payload:result.data.results});


    }catch (error) {
        console.log('Get Action API error: ' ,error)
    }
}

export const getComedyMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${Base_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        );
        dispatch({type : Types.GET_COMEDY_MOVIES, payload:result.data.results});


    }catch (error) {
        console.log('Get Comedy API error: ' ,error)
    }
}


export const getHorrorMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${Base_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        );
        dispatch({type : Types.GET_HORROR_MOVIES, payload:result.data.results});


    }catch (error) {
        console.log('Get Horror API error: ' ,error)
    }
}

export const getROMANCEMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${Base_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        );
        dispatch({type : Types.GET_ROMANCE_MOVIES, payload:result.data.results});


    }catch (error) {
        console.log('Get ROMANCE API error: ' ,error)
    }
}

export const getDocumentaries = () => async dispatch => {
    try {
        const result = await axios.get(
            `${Base_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
        );
        dispatch({type : Types.GET_DOCUMENTTARES_MOVIES, payload:result.data.results});


    }catch (error) {
        console.log('Get Documentaries API error: ' ,error)
    }
}

export const setMoviesDetails = (movie) => dispatch => {
    dispatch({type: Types.SET_MOVIES_DETAILS, payload: movie})
}

export const getSearchMovie  = (keywords) => async dispatch => {

    try {
        const result = await axios.get(
            `${Base_URL}/search/movie?api_key=${API_KEY}&query=${keywords}`
        )
        dispatch({type: Types.GET_SEARCH_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get SEARCH API error: ' ,error)
     }

}

