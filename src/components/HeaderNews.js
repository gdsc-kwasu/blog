import React from "react";
import {
  Badge,
  Card,
  HeaderNewsStyle,
} from "~components/styled/HeaderNews.styled";

const HeaderNews = () => {
  return (
    <HeaderNewsStyle>
      <h1 className="title"> “Blog” </h1>
      <div className="blog_sub_title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna
      </div>

      <Card>
        <div className="col-1 col">
          <img src="images/blog_1.png" alt="Blog Image" />
        </div>

        <div className="col-2 col">
          <Badge> Latest </Badge>

          <h1 className="topic">Top 3 Tech Careers to pursue in 2021</h1>

          <div className="blog_info">
            When value-add multifamily deals are done correctly, they can be
            extremely secure, profitable, and rewarding.
            {/* This place need a dynamic Data rendring  */}
            <span className="blog__info_text">
              However, unfortunately, many investors make a number of key
              mistakes when they are buying value-add multifamily deals.
            </span>
          </div>

          <small className="blog_time">
            June 20th <span className="dot"></span> 4 min read
          </small>
        </div>
        {/* </div> */}
      </Card>
    </HeaderNewsStyle>
  );
};

export default HeaderNews;
