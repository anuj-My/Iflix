import axios from "axios";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Poster from "../components/Poster";

const Home = () => {
  const [popularMovies, setPopularMoviesData] = useState([]);
  const getPopularMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=329687fabc3ae889caf2b760dd47d231"
      );

      setPopularMoviesData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  const PopularMoviesList = popularMovies.map((movie) => {
    return <Poster movie={movie} key={movie.id} />;
  });
  return (
    <>
      <Carousel
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        {PopularMoviesList}
      </Carousel>
    </>
  );
};

export default Home;