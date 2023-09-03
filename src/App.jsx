import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ImageChecker from "./components/ImageChecker";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image" element={<ImageChecker />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
