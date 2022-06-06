import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

BookingPage.propTypes = {};

function BookingPage(props) {
  const { showTime } = useParams();
  return <div>BookingPage - with showTime: {showTime}</div>;
}

export default BookingPage;
