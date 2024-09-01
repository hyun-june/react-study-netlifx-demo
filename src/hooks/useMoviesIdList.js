import { useQuery } from "@tanstack/react-query"
import api from "../utills/api"

export const useMoviesIdList = () =>{
    return useQuery({
        queryKey:['movie-id-list'],
        queryFn:()=>{
            return api.get(`/genre/movie/list`)
        },
        select:(result)=>result.data.genres,
        staleTime:300000 // 5분
    })
}