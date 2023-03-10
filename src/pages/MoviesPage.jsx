import styled from "styled-components";
import MoviesList from "../components/MoviesList";

const Container = styled.section`
  margin-top: 15rem;
`;

const MoviesPage = () => {
  return (
    <Container>
      <MoviesList />
    </Container>
  );
};

export default MoviesPage;
