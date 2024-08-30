import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovie from './components/PopularMovieSlide/PopularMovie'

// 1. 배너 => popular영화의 첫번째 아이템을 보여준다.
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopularMovie />
    </div>
  )
}

export default Homepage