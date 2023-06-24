import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage, DCPage, SearchPage, HeroPage } from "..";
import { Navbar } from "../../ui";

export const HeroesRouter = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
