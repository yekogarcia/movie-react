import React from "react";
import { Row, Col } from "antd";
import useFetch from "../hooks/useFetch";
import { URL_API, API } from "../utils/constans";
import SliderMovies from "../components/SliderMovies";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es-Es&page=1`
  );
  const populateMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es-Es&page=1`
  );
  const topRateMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=es-Es&page=1`
  );
  console.log(newMovies);

  return (
    <>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <MovieList title="Peliculas Populares" movies={populateMovies} />
        </Col>
        <Col span={12}>
          <MovieList title="Mejor peliculas puntuadas" movies={topRateMovies} />
        </Col>
      </Row>
      <Footer />
    </>
  );
}
