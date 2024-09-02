import { useQuery } from "@tanstack/react-query"
import api from "../utills/api"

const fetchDetailMovie = ({id}) =>{
    return api.get(`/movie/${id}?language=ko`)
}

export const useMovieDetail = ({id}) =>{
    return useQuery({
        queryKey:[`movie-detail`,{id}],
        queryFn:()=>fetchDetailMovie({id}),
        select:(result)=>result.data,
        staleTime:600000 // 10분
    })
}
