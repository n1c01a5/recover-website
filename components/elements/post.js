import { Link } from '../../routes'

const PostItem = ({ post }) => (
  <li>
    <Link route='post' params={{slug: post.slug}}>
      <a><h3>{post.title}</h3></a>
    </Link>
  </li>
)

export default PostItem