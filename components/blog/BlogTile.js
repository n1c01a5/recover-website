export const BlogTile = ({ post }) => {
  const { topic, title, teaser, cover, slug } = post
  return (
    <a href={`/blog/${slug}`}>
      <div className="blog">
        <div
          className="blog_image blog_tile_1"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
        <div>
          <div className="blog_topic">
            <a href={`/blog/${slug}`}>
              <h4>{topic}</h4>
            </a>
          </div>
          <p className="blog_title">
            <a href={`/blog/${slug}`}>{title}</a>
          </p>
          <p className="blog_resume">{teaser}</p>
        </div>
      </div>
    </a>
  )
}
