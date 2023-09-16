import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import { useGlobalContext } from "./Components/utils/global.context";

function App() {
  const { stateTheme } = useGlobalContext();

  const appClassName = stateTheme.t ? "App" : "dark";

  return (
    <div className={appClassName}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
