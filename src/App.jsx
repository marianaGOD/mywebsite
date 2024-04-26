import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import HomePageAnimation from "./Pages/HomePageAnimation";
import AboutMe from "./Pages/AboutMe";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_CONTENT_API, // Ensure this is correctly configured
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {" "}
        {/* This should be the only Router in your application */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/welcome" element={<HomePageAnimation />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
