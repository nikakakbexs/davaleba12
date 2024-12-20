import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";
import "./styles/HomePage.css";

const HomePage = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="home-page">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-description">
            {blog.description.substring(0, 50)}...
          </p>
          <Link to={`/blog/${blog.id}`} className="blog-link">
            Show more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
