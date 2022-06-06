import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Button } from "@mui/material";

HomeTemplate.propTypes = {};

function HomeTemplate(props) {
  return (
    <>
      <Header />
      <Link to="/">
        <Button color="primary">Home</Button>
      </Link>
      <Button>
        <Link to="/movie/1">Movie Detail</Link>
      </Button>{" "}
      <Button>
        <Link to="/booking/100">Movie Detail</Link>
      </Button>
      <Button>
        <Link to="/401">401</Link>
      </Button>
      <Outlet />
      <Footer />
    </>
  );
}

export default HomeTemplate;
