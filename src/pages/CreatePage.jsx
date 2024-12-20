import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link, useNavigate } from "react-router-dom";
import "./styles/CreatePage.css";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(title, description);
    navigate("/");
  };

  return (
    <div className="create-page">
      <Link to="/" className="back-link">
        ← Back
      </Link>
      <h2 className="page-title">
        <span>Create New Blog </span>
      </h2>
      <form onSubmit={handleSubmit} className="create-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input-field"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="textarea-field"
        />
        <button type="submit" className="submit-button">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
