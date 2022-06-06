import { Button } from "@mui/material";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { movieServices } from "./api/movie.api";
import Header from "./components/Header";
import BookingPage from "./pages/Booking/BookingPage";
import HomePage from "./pages/Home/HomePage";
import MovieDetailPage from "./pages/Movie/MovieDetailPage";
import UnAuthorizePage from "./pages/UnAuthorize/UnAuthorizePage";
import HomeTemplate from "./template/home.template";

function App() {
  useEffect(() => {
    const testAPI = async () => {
      const res = await movieServices.getAllMovie();
      console.log(res);
    };
    // testAPI();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomeTemplate />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />{" "}
        <Route path="/booking/:showTime" element={<BookingPage />} />
        <Route path="/401" element={<UnAuthorizePage />} />
      </Route>
    </Routes>
  );
}

export default App;
