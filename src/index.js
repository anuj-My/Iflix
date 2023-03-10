import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SearchProvider from "./context/SearchProvider";
import "./index.css";
import App from "./App";
import CastProvider from "./context/CastProvider";
import TrailerProvider from "./context/TrailerProvider";
import MovieListProvider from "./context/MovieListProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <CastProvider>
          <TrailerProvider>
            <MovieListProvider>

            <App />
            </MovieListProvider>
          </TrailerProvider>
        </CastProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
