import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';  
import Home from "./pages/Home";
import Loader from './components/Loader';

import mainBGimage from './assets/principal-assets/main-bg-img.webp';
import mainFoto from './assets/principal-assets/main-foto.webp';

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const images = [mainBGimage, mainFoto];
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
    <BrowserRouter basename="/leonti-aesthetic">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
