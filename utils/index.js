export const sortArticlesByDate = (a, b) => {
  const date = new Date();
  return date(b.frontmatter.date) - date(a.frontmatter.date);
};
