import Avatar from '../elements/avatar'
import TimeInfo from './time-info'

import styles from '../../styles/blogs/header.module.scss'

const Header = ({ post }) => {
  const { topic, title, teaser: resume, readTime, date, authors } = post
  return (
    <header className={styles.blogInfo}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.resume}>{resume}</p>
      <p className={styles.topic}>{topic}</p>

      <hr className={styles.hr} />
      <div className={styles.authors}>
        {authors.map((author) => {
          const { name, tag, designation, image } = author
          return <Avatar key={tag} name={name} tag={tag} designation={designation} image={image} />
        })}
      </div>
      <TimeInfo readTime={readTime} date={date} />
    </header>
  )
}

export default Header
