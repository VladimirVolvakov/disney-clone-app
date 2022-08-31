import React from "react";
// Styles:
import "./App.css";
// Components:
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Authorization from "./components/Authorization/Authorization";
// Router:
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details" element={<MovieDetails />} />
          <Route exact path="/login" element={<Authorization />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
