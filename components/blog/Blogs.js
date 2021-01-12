import { BlogTile } from './BlogTile'
import { getNonFeaturedBlogs } from '../../utils/blogs'

const Divider = () => (
  <div className="divider">
    <hr />
  </div>
)

const insertDivider = (posts) => {
  return [...posts.slice(0, 3), <Divider />, ...posts.slice(3)]
}

export const Blogs = ({ posts }) => {
  const nonFeaturedBlogs = getNonFeaturedBlogs(posts)

  const nonFeaturedBlogTiles = nonFeaturedBlogs.map((post) => (
    <BlogTile post={post} />
  ))

  const blogTilesWithDivider = () => insertDivider(nonFeaturedBlogTiles)

  return <section className="blogs">{blogTilesWithDivider()}</section>
}
