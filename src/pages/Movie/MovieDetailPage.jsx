import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
MovieDetailPage.propTypes = {};

function MovieDetailPage(props) {
  const { id } = useParams();
  return <div>MovieDetailPage - movieID: {id}</div>;
}

export default MovieDetailPage;
