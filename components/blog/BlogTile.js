import styles from '../../styles/blogs/BlogTile.module.scss'

export const BlogTile = ({ post }) => {
  const { topic, title, teaser, cover, slug } = post

  return (
    <a href={`/blog/${slug}`} className={styles.blogTileContainer}>
      <div>
        <div
          className={styles.blogImage}
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
        <div>
          <div>
            <h4 className={styles.blogTopic}>{topic}</h4>
          </div>
          <p className={styles.blogTitle}>{title}</p>
          <p className={styles.blogResume}>{teaser}</p>
        </div>
      </div>
    </a>
  )
}
