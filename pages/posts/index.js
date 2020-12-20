import { getPosts } from '../../api/posts'
import Post from '../../components/elements/post'

const IndexBlog = ({ posts }) => (
  <ul>
    {posts.map(post => <Post key={post.slug} post={post} />)}
  </ul>
)

IndexBlog.getInitialProps = async ({ req }) => {
  const res = getPosts()

  return { posts: res }
}

export default IndexBlog