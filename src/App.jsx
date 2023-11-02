import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./Components/Navbar/Navbarr";
import Navbarr from "./Components/Navbar/Navbarr";
import Banner from "./Components/Banner/Banner";
import { Container } from "react-bootstrap";
import Learn from "./Components/Learn/Learn";
import AboutOne from "./Components/AboutOne/AboutOne";
import AboutTwo from "./Components/AboutTwo/AboutTwo";
import Followers from "./Components/Followers/Followers";
import From from "./Components/From/From";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbarr />
        <Banner />
        <Learn />
        <AboutOne />
        <Followers />
        <AboutTwo />
        <From />
        <Footer />
      </div>
    </>
  );
}

export default App;
