import { useQuery } from "@tanstack/react-query";
import api from "../utills/api";

export const useNowPlayingMoviesQuery = () =>{
    return useQuery({
        queryKey:['movie-banner'],
        queryFn:()=>{
            return api.get(`/movie/now_playing?language=ko`)
        },
        select:(result)=>result.data
    })
}