import BlogTile from './tile'
import { getNonFeaturedBlogs } from '../../utils/blogs'

import styles from '../../styles/blogs/posts.module.scss'
import dividerStyles from '../../styles/elements/divider.module.scss'

const Divider = () => (
  <div className={dividerStyles.divider}>
    <hr />
  </div>
)

const insertDivider = (posts) => ([
  ...posts.slice(0, 3), <Divider />, ...posts.slice(3)] // FIXME: add key in the divider component.
)

const Posts = ({ posts }) => {
  const nonFeaturedBlogs = getNonFeaturedBlogs(posts)

  const nonFeaturedBlogTiles = nonFeaturedBlogs.map((post, index) => (
    <BlogTile key={index} post={post} />
  ))

  const blogTilesWithDivider = () => insertDivider(nonFeaturedBlogTiles)

  return <section className={styles.blogs}>{blogTilesWithDivider()}</section>
}

export default Posts
