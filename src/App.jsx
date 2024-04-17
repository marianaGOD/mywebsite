import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import HomePageAnimation from "./Pages/HomePageAnimation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />~
        <Route path="/welcome" element={<HomePageAnimation />} />
      </Routes>
    </>
  );
}

export default App;
