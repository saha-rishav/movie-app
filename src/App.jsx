/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchDataFromApi } from "./utils/api"
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchresult/SearchResult';
import PageNotFound from './pages/404/PageNotFound';
import Explore from './pages/explore/Explore';

function App() {

  const dispatch = useDispatch();
  // state is a callback method her
  const { url } = useSelector((state) => state.home);
  console.log(url)

  useEffect(() => {
    fetchApiConfig()
  }, []) // [] is the dependency array here

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then((res) => {
        console.log(res);
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }
        dispatch(getApiConfiguration(url));
      })
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App