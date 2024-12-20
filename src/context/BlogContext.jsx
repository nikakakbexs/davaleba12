import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "First Blog", description: "This is the first blog" },
    { id: 2, title: "Second Blog", description: "This is the second blog" },
  ]);

  const addBlog = (title, description) => {
    setBlogs([...blogs, { id: blogs.length + 1, title, description }]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
