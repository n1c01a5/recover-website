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
            <a href={`/blog/${slug}`}>
              <h4>{topic}</h4>
            </a>
            <a href={`/blog/${slug}`}>
              <h2>{title}</h2>
            </a>
            <p>{teaser}</p>
          </div>
        </div>
      </div>
    </a>
  )
}
