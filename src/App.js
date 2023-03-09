import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Movie from "./pages/Movie";
import SearchList from "./components/SearchList";
import Footer from "./components/Footer";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState(null);

  const getMovieBySearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=329687fabc3ae889caf2b760dd47d231&language=en-US&query=${searchInput}&page=1&include_adult=false`
      );

      setSearchList(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getMovieBySearch();
  };

  return (
    <div className="App">
      <Header
        onChangeHandler={onChangeHandler}
        submitHandler={submitHandler}
        searchInput={searchInput}
      />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="movies/:type" element={<MoviesList />} />
        <Route
          path="search"
          element={
            <SearchList searchList={searchList} searchInput={searchInput} />
          }
        />
        {/* <Route path="/*" element={<ErrorPage />} />  */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
