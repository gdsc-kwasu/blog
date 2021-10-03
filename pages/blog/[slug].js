import fs from "fs";
import path from "path";

const BlogPage = () => {
  return <div>new post</div>;
};

export default BlogPage;

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("articles"));

  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    // // in situations where you try to access a path
    // // that does not exist. it'll return a 404 page
    fallback: false,
  };
}

// destructuring params to get the unique slugs
export async function getStaticProps({ params: { slug } }) {
  console.log(slug);
  return {
    props: {},
  };
}
