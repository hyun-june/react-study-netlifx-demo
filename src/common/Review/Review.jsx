import React, { useState } from 'react'
import { useReviewData } from '../../hooks/useReviewData'
import { useParams } from 'react-router-dom'
import "./Review.style.css"
import { Alert, Spinner } from 'react-bootstrap'


const Review = () => {
    let {id} = useParams();
    const {data,isLoading,isError,error} = useReviewData({id})
    console.log("review",data)

    if (isLoading) {
        return <div>
        <Spinner animation='border' variant='danger' style={{width:"5rem",height:"5rem"}} />
      </div>;
      }
      if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
      }    
      
      const topReview = data.results.slice(0,5);
      console.log(topReview)

      return (
    <div>
        {/* <div className='review-box'>
            <div>{data?.results[0].author}</div>
            <div>{data?.results[0].content}</div>
            <div>{updatedAt}</div>
        </div> */}

        {topReview?.map((movie,index)=><div className='review-box'>
            <h5>{movie.author}</h5>
            <div className='review-content'>{movie.content}</div>
            <div className='review-date'>{movie.updated_at.slice(0,10)}</div>
        </div>)}
    </div>
  )
}

export default Review