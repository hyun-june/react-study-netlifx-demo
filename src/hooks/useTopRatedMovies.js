import { useQuery } from "@tanstack/react-query";
import api from "../utills/api";

export const useTopRatedMoviesQuery = () =>{
    return useQuery({
        queryKey:['movie-topRated'],
        queryFn:()=>{
            return api.get(`/movie/top_rated`)
        },
        select:(result)=>result.data
    })
}