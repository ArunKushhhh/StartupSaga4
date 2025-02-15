import { useRef } from "react";
import Hero from "../sections/Hero";
import NavBar from "../components/Navbar";

const Home = () => {

  return (
    <div className="relative">
      <div className="w-full mx-auto relative flex flex-col items-center">
        <NavBar />
      </div>
      <Hero />
    </div>
  );
};

export default Home;
