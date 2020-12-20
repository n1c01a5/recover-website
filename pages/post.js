import { getPosts } from '../api/posts'

const PostPage = ({ post }) => (
  <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
  </>
)

PostPage.getInitialProps = async ({ query }) => {
  const res = getPosts() // TODO: use query to fetch the blog page
console.log(res[0])
  return { post: res[0] }
}

export default PostPage