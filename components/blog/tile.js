import { useRouter } from 'next/router'

import styles from '../../styles/blogs/tile.module.scss'

const Tile = ({ post }) => {
  const { topic, title, teaser, cover, slug } = post
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/blog/${slug}`)}
      className={styles.blogTileContainer}
    >
      <div
        className={styles.blogImage}
        style={{ backgroundImage: `url(${cover})` }}
      />
      <div>
        <div>
          <h4 className={styles.blogTopic}>{topic}</h4>
        </div>
        <p className={styles.blogTitle}>{title}</p>
        <p className={styles.blogResume}>{teaser}</p>
      </div>
    </div>
  )
}

export default Tile
