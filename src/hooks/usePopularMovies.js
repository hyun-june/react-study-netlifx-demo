import { useQuery } from "@tanstack/react-query";
import api from "../utills/api";

const fetchPopulartMovies = () =>{
    return api.get(`/movie/popular`)
}

export const usePopularMoviesQuery = () =>{
    return useQuery({
        queryKey:['movie-popular'],
        queryFn:fetchPopulartMovies,
        select:(result)=>result.data
    })
}