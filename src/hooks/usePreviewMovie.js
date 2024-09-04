import { useQuery } from "@tanstack/react-query"
import api from "../utills/api"

const fetchPreviewMovie = ({id}) =>{
    return api.get (`/movie/${id}/videos`)
}

export const usePreviewMovie = ({id})=>{
    return useQuery({
        queryKey:[`movie-preview`,{id}],
        queryFn:()=>fetchPreviewMovie({id}),
        select:(result)=>result.data
    })
}