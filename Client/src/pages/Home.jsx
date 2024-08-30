import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import GetResume from "../components/GetResume";
import axios from "axios";
const Api_URL = import.meta.env.VITE_SERVER_URL;

const Home = () => {
  useEffect(() => {
    axios.get(Api_URL).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <Header />
      <Introduction />
      <AboutMe />
      <GetResume />
      <Footer />
    </>
  );
};

export default Home;
