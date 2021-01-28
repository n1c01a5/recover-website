import styles from '../../styles/blogs/FeaturedBlog.module.scss'

export const FeaturedBlogTile = ({ featuredBlog }) => {
  const { topic, title, teaser, slug, cover } = featuredBlog
  return (
    <a className={styles.linkWrapper} href={`/blog/${slug}`}>
      <div className={styles.highlightedBlog}>
        <div
          className={styles.blogImage}
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
        <div className={styles.info}>
          <div>
            <h4 className={styles.topic}>{topic}</h4>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.teaser}>{teaser}</p>
          </div>
        </div>
      </div>
    </a>
  )
}
