import "./App.css";
import React from "react";
import Cards from "./components/Cards";
import MovieDb from "./components/MovieDb";

// function Search() {
//   return (
//     <div className="search">
//       <input type="text" id="searchInput" />
//       <img src="" alt="" />
//     </div>
//   );
// }

function App() {
  // const [info, setInfo] = useState("game%20of%20thr");
  // search(info);
  // setInfo("game%20of%20thr");
  // console.log(info);

  return (
    <div className="app">
      <h1>
        MovieDb <i className="fab fa-pied-piper-alt"></i>
      </h1>
      {/* {search(info)} */}
      <MovieDb />
      {/* <Cards /> */}
    </div>
  );
}

export default App;
