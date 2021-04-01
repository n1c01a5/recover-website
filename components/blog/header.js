import Avatar from '../elements/avatar'
import TimeInfo from './time-info'
import { useMediaQuery } from 'react-responsive'

import styles from '../../styles/blogs/header.module.scss'

const Header = ({ post }) => {
  const { topic, title, teaser: resume, readTime, date, authors } = post
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 720px)'
  })
  return (
    <header className={styles.blogInfo}>
      <p className={styles.topic}>{topic}</p>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.resume}>{resume}</p>
      <p className={styles.category}>Lost and Found</p>
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
      {isDesktopOrLaptop && (<TimeInfo readTime={readTime} date={date} />)}
    </header>
  )
}

export default Header
