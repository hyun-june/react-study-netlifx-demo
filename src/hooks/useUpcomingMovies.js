import { useQuery } from "@tanstack/react-query";
import api from "../utills/api";

export const useUpcomingMoviesQuery = () =>{
    return useQuery({
        queryKey:['movie-upcoming'],
        queryFn:()=>{
            return api.get(`/movie/upcoming?language=ko`)
        },
        select:(result)=>result.data
    })
}

