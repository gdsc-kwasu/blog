import Link from "next/link";
import {
  Card,
  Describtion,
  FeaturedNewsStyle,
  Time,
  Title,
} from "./styled/FeaturedNews.styled";

const FeaturedNews = () => {
  const blog = [
    {
      id: 1,
      title: "Top 3 Tech Careers to pursue in 2021",
      date: "June 20th",
      slug: "top-coding-careers",
      time: "4 min read",
      img: "/images/blog_7.png",
    },
    {
      id: 2,

      title: "Top 3 Tech Careers to pursue in 2021",
      date: "June 20th",
      img: "/images/blog_2.png",
      time: "4 min read",
    },
    {
      id: 3,

      title: "Top 3 Tech Careers to pursue in 2021",
      date: "June 20th",
      img: "/images/blog_4.png",
      time: "4 min read",
    },
    {
      id: 4,

      title: "Top 3 Tech Careers to pursue in 2021",
      date: "June 20th",
      img: "/images/blog_3.png",
      time: "4 min read",
    },
    {
      id: 5,

      title: "Top 3 Tech Careers to pursue in 2021",
      date: "June 20th",
      img: "/images/blog_6.png",
      time: "4 min read",
    },
    {
      id: 6,

      title: "Top 3 Tech Careers to pursue in 2021",
      date: "June 20th",
      img: "/images/blog_5.png",
      time: "4 min read",
    },
  ];
  return (
    <FeaturedNewsStyle>
      {blog.map((news) => {
        return (
          <Card key={news.id}>
            <div className="blog_img">
              <img src={news.img} alt="" />
            </div>
            <Describtion>
              <Link href={`/blog/${news.slug}`} passHref>
                <Title>Top 3 Tech Careers to pursue in 2021</Title>
              </Link>
              <Time>
                {news.date}
                <span className="dot"></span>
                {news.time}
              </Time>
            </Describtion>
          </Card>
        );
      })}
    </FeaturedNewsStyle>
  );
};

export default FeaturedNews;
