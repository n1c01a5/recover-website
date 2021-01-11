export const FeaturedBlogTile = ({ featuredBlog }) => {
  const { topic, title, teaser, slug, cover } = featuredBlog
  return (
    <a href={`/blog/${slug}`}>
      <div className="highlighted_blog">
        <div
          className="blog_image"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
        <div className="info">
          <div>
            <h4>{topic}</h4>
            <h2>{title}</h2>
            <p>{teaser}</p>
          </div>
        </div>
      </div>
    </a>
  )
}
