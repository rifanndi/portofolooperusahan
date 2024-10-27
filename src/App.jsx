import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import BlogPage from "./pages/blog";
import ProductPage from "./pages/produkpage";
import ProducsitGrid from "./componet/ProducsitGrid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/papan" element={<ProductPage />} />
        <Route path="/about" element={<ProducsitGrid />} />
      </Routes>
    </Router>
  );
}

export default App;
