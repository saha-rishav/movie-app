/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import "./style.scss"
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Img from "../../../components/lazyLoadImage/Img"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"

const HeroBanner = () => {

  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home)
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }


  return (
    <div className="heroBanner">
      {!loading &&
        <div className="backdropImg">
          <Img src={background} />
        </div>
      }
      <div className="opacityLayer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">Millions of movies, TV shows and people to discover. Explore Now</span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for Movies / Tv Shows"
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)} />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner