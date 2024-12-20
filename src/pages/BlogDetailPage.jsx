import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { useParams, Link } from "react-router-dom";

const BlogDetailPage = () => {
  const { blogs } = useContext(BlogContext);
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  return (
    <div className="blog-detail-page">
      <Link to="/">← Back</Link>
      {blog ? (
        <>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </>
      ) : (
        <p>Blog not found!</p>
      )}
    </div>
  );
};

export default BlogDetailPage;
