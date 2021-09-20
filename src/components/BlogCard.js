import React from "react";
import propTypes from "prop-types";

const BlogCard = ({ blogTitle, frontmatter, date, author }) => {
  return (
    <div className="card">
      {blogTitle}
      {frontmatter}
      {date}
      {author}
    </div>
  );
};

export default BlogCard;
