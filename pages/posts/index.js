import { getPosts } from '../../api/posts'
import Post from '../../components/elements/post'

const IndexPage = ({ posts }) => (
  <ul>
    {posts.map(p => (
      <Post key={p.title} post={p} />
    ))}
  </ul>
)

IndexPage.getInitialProps = async ({ req }) => {
  const res = getPosts()

  return { posts: res }
}

export default IndexPage