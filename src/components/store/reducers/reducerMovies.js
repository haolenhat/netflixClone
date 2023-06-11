import * as Types from "../types";

const reducerMoviesInitialState = {
    NetflixOriginals:null,
    TrendingMovies:null,
    TopRateMovies:null,
    ActionMovies:null,
    ComedyMovies:null,
    HorrorMovies:null,
    RomanceMovies:null,
    Documentaries:null,
    MovieDetail:null,
    SearchMovie:null,
}

const reducerMovies = (state = reducerMoviesInitialState,action) => {
    const {type,payload} = action;
    switch(action.type) {
        case Types.GET_NETFLIX_ORIGINALS:
            return {...state,NetflixOriginals:payload}
        case Types.GET_TRENDING_MOVIES:
            return {...state,TrendingMovies:payload}
        case Types.GET_TOP_RATE_MOVIES:
            return {...state,TopRateMovies:payload}
        case Types.GET_ACTION_MOVIES:
            return {...state,ActionMovies:payload}
        case Types.GET_COMEDY_MOVIES:
            return {...state,ComedyMovies:payload}
        case Types.GET_HORROR_MOVIES:
            return {...state,HorrorMovies:payload}
        case Types.GET_ROMANCE_MOVIES:
            return {...state,RomanceMovies:payload}
        case Types.GET_DOCUMENTTARES_MOVIES:
            return {...state,Documentaries:payload}
        case Types.SET_MOVIES_DETAILS:
            return {...state,MovieDetail:payload}
        case Types.GET_SEARCH_MOVIES:
            return {...state,SearchMovie:payload}
        default:
            return state
    }
}

export default reducerMovies;