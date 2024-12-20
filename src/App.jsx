import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BlogDetailPage from "./pages/BlogDetailPage";
import CreatePage from "./pages/CreatePage";
import "./index.css";

const App = () => (
  <BlogProvider>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </main>
    </Router>
  </BlogProvider>
);

export default App;
