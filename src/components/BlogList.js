import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>
            BG {blog.chapter}.{blog.text}
          </h2>

          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.sloke}</h3>
            <h3>{blog.translation}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
