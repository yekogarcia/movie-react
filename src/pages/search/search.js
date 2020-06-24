import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import { URL_API, API } from "../../utils/constans";

import "./search.scss";

function Search(props) {
  const { location, history } = props;
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;
      if (typeof s != "undefined") {
        const response = await fetch(
          `${URL_API}/search/movie?api_key=${API}&language=es-Es&query=${s}&page=1`
        );
        const movies = await response.json();

        setSearchValue(s);
        setMovieList(movies);
      }
    })();
  }, [location.search]);

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  return (
    <Row>
      <Col span={12} offset={6} className="search">
        <h1>Busca tu pelicula</h1>
        <Input value={searchValue} onChange={onChangeSearch} />
      </Col>
      {console.log(movieList)}
      {movieList != 0 && movieList.results && (
        <Row>
          <Col span={24} className="listMovieCatalog">
            <MovieCatalog movies={movieList} />
          </Col>
        </Row>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

export default withRouter(Search);
