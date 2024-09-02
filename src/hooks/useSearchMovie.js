import { useQuery } from "@tanstack/react-query"
import api from "../utills/api";

const fetchSearchMovie=({keyword,page})=>{
    return keyword?api.get(`/search/movie?query=${keyword}&page=${page}`):api.get(`/movie/now_playing?page=${page}?language=ko`);
}

export const useSearchMovieQuery = ({keyword,page})=>{
    return useQuery({
        queryKey:[`movie-search`,{keyword,page}],
        queryFn:()=>fetchSearchMovie({keyword,page}),
        select:(result)=>result.data
    })
}