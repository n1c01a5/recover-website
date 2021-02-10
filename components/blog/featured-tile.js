import { useRouter } from 'next/router'

import styles from '../../styles/blogs/featured-blog.module.scss'

const FeaturedTile = ({ featuredBlog }) => {
  const { topic, title, teaser, slug, cover } = featuredBlog
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/blog/${slug}`)}
      className={styles.linkWrapper}
    >
      <div className={styles.highlightedBlog}>
        <div
          className={styles.blogImage}
          style={{ backgroundImage: `url(${cover})` }}
        />
        <div className={styles.info}>
          <div>
            <h4 className={styles.topic}>{topic}</h4>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.teaser}>{teaser}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedTile
