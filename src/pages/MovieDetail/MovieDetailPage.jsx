import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import "./MovieDetailPage.style.css"
import Review from "../../common/Review/Review";
import NowplayingMovieSlide from '../../pages/Homepage/components/NowPlayingMovieSlide/NowplayingMovieSlide'

const MovieDetail = () => {
  let { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetail({ id });
  console.log(data);
  if (isLoading) {
    return (
      <div>
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <Container style={{paddingTop:"2rem"}}>
        <Row className="detail-section">
          <Col lg={4} xs={12}>
            <div className="detail-poster" style={{backgroundImage:"url("+`https://image.tmdb.org/t/p/w300_and_h450_bestv2${data?.backdrop_path}`+")"}}></div>
          </Col>
          <Col lg={8} xs={12}>
            <h3 className="detail-tag">{data?.tagline}</h3>
            <h2 className="detail-title">{data?.title}</h2>
            <h4>개요</h4>
            <p>{data?.overview}</p>
            <p>개봉일 : {data?.release_date}</p>
            <p>상영시간 : {data?.runtime}분</p>
            <p>평점 : {data?.vote_average}</p>
          </Col>
        </Row>
        <Review />
      </Container>
      <NowplayingMovieSlide/>
    </div>

  )
};

export default MovieDetail;
