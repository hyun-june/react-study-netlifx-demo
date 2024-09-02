import { useQuery } from "@tanstack/react-query"
import api from "../utills/api"

const fetchReview = ({id}) =>{
    return api.get(`/movie/${id}/reviews`)
}

export const useReviewData = ({id}) =>{
    return useQuery({
        queryKey:[`movie-review`,{id}],
        queryFn:()=>fetchReview({id}),
        select:(result)=>result.data,
        staleTime:600000,
    })
}