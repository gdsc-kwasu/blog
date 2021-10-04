import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;

  img {
    height: 50px;
    width: 50px;
    border: 3px solid var(--google-blue);
    border-radius: 50%;
  }

  .author-info-date {
    width: 100%;
    margin: 0 0 0 10px;

    .author {
      font-weight: 700;
      margin-top: 0px;
      font-size: 16px;
    }

    .published-date {
      margin-top: -10px;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

const Profile = ({ author, img, date }) => {
  return (
    <Wrapper>
      <img src={img} alt="author's profile picture" />
      {/* <img src={`https://avatars.dicebear.com/v2/avataaars/{{${article.frontmatter.author}}}.svg?options[mood][]=happy`} alt="author's profile picture" /> */}
      <div className="author-info-date">
        <p className="author">{author}</p>
        <p className="published-date">{date}</p>
      </div>
    </Wrapper>
  );
};

export default Profile;

Profile.propTypes = {
  author: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  img: propTypes.node.isRequired,
};
