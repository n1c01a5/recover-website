import { BlogTile } from './BlogTile'
import { getNonFeaturedBlogs } from '../../utils/blogs'

import styles from '../../styles/blogs/Blogs.module.scss'
import dividerStyles from '../../styles/elements/Divider.module.scss'

const Divider = () => (
  <div className={dividerStyles.divider}>
    <hr />
  </div>
)

const insertDivider = (posts) => {
  return [...posts.slice(0, 3), <Divider />, ...posts.slice(3)]
}

export const Blogs = ({ posts }) => {
  const nonFeaturedBlogs = getNonFeaturedBlogs(posts)

  const nonFeaturedBlogTiles = nonFeaturedBlogs.map((post) => (
    <BlogTile key={post.slug} post={post} />
  ))

  const blogTilesWithDivider = () => insertDivider(nonFeaturedBlogTiles)

  return <section className={styles.blogs}>{blogTilesWithDivider()}</section>
}
