import Avatar from '../elements/Avatar'
import TimeInfo from './TimeInfo'

import styles from '../../styles/blogs/Header.module.scss'

const Header = ({ post }) => {
  const { topic, title, teaser: resume, readTime, date, authors } = post
  return (
    <header className={styles.blogInfo}>
      <p className={styles.topic}>{topic}</p>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.resume}>{resume}</p>
      <hr className={styles.hr} />
      <div className={styles.authors}>
        {authors.map((author) => {
          const { name, tag, designation, image } = author
          return (
            <Avatar
              key={tag}
              name={name}
              tag={tag}
              designation={designation}
              image={image}
            />
          )
        })}
      </div>
      <TimeInfo readTime={readTime} date={date} />
    </header>
  )
}

export default Header
