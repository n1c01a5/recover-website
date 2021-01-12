import Avatar from '../elements/Avatar'
import TimeInfo from './TimeInfo'

const BlogHeader = ({ post }) => {
  const { topic, title, teaser: resume, readTime, date, authors } = post
  return (
    <header className="blog-info">
      <p className="topic">{topic}</p>
      <h1 className="escrow-header">{title}</h1>
      <p className="resume">{resume}</p>
      <hr />
      <div className="authors">
        {authors.map((author) => {
          const { name, tag, designation, image } = author
          return (
            <Avatar
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

export default BlogHeader
