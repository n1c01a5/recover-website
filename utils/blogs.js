export const getNonFeaturedBlogs = (posts) =>
  posts.filter((post) => !post.isFeatured)

export const getFeaturedBlog = (posts) => posts.find((post) => post.isFeatured)

export const getAuthorHelper = (authors) => (tag) =>
  authors.find((author) => author.tag === tag)
