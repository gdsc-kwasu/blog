import React from "react";
import propTypes from "prop-types";

const BlogCard = ({ blogTitle, frontmatter, date, author }) => {
  return (
    <div className="card">
      <h3>{blogTitle}</h3>
      <p className="frontmatter">{frontmatter}</p>
      <div className="flex-items">
        {date}
        {author}
      </div>
    </div>
  );
};

export default BlogCard;
