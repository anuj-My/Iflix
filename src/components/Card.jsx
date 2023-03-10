import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 14rem 1rem 1rem 1rem;
  height: 100%;
`;

const CardContainer = styled.div`
  width: 100%;
  position: relative;
  transition: all 0.3s ease;

  @media (hover: hover) {
    a > &:hover {
      transform: scale(1.2);
      z-index: 999;

      ${Overlay} {
        display: block;
        z-index: 1000;
      }
    }
  }

  @media (hover: none) {
    ${Overlay} {
      display: block;
    }
  }
`;

const Title = styled.div`
  font-size: 2rem;

  @media screen and (max-width: 760px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 1.5rem;
  }
`;
const Runtime = styled.div`
  margin: 0.5rem 0 0.3rem 0;
  @media screen and (max-width: 760px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 1.4rem;
  }
`;
const Rating = styled.span`
  margin-left: 3rem;
`;
const Description = styled.div`
  font-size: 1.4rem;
`;

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <CardContainer>
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={330} duration={2} />
          </SkeletonTheme>
        </CardContainer>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white", width: "none" }}
        >
          <CardContainer>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            />
            <Overlay>
              <Title>{movie?.original_title}</Title>
              <Runtime>
                {movie?.release_date}
                <Rating>
                  {movie?.vote_average}
                  <AiFillStar />
                </Rating>
              </Runtime>
              <Description>{movie?.overview.slice(0, 118) + "..."}</Description>
            </Overlay>
          </CardContainer>
        </Link>
      )}
    </>
  );
};

export default Card;
