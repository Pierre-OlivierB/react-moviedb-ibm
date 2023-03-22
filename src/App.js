import "./App.css";
import React from "react";
import MovieDb from "./components/MovieDb";

function App() {
  return (
    <div className="app">
      <h1>
        MovieDb <i className="fab fa-pied-piper-alt"></i>
      </h1>
      <MovieDb />
    </div>
  );
}

export default App;
