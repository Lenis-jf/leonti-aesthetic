// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';  
import Home from "./pages/Home";
import Services from "./pages/Services";
import Loader from './components/Loader';

import mainFoto from './assets/principal-assets/main-foto.webp';

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const images = [mainFoto];
    Promise.all(
      images.map(src =>
        new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = resolve;
        })
      )
    ).then(() => setReady(true));
  }, []);

  if (!ready) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home imagesLoaded={ready}/>} />
        <Route path="services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
