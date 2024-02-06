import "./Home.css";
import Main from "../../components/MAIN/Main";
import AboutUs from "../../components/ABOUTUS/AboutUs";
import Business from "../../components/BUSINESS/Business";
import Rental from "../../components/RENTAL/Rental";
import Contact from "../../components/CONTACT/Contact";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Main/>
      <AboutUs/>
      <Rental/>
      <Business/>
      <Contact/>
    </>
  );
};

export default Home;
