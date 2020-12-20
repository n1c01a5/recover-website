import {Link} from '../../routes'

const PostItem = ({ post }) => (
  <Link route='post' params={{slug: 'escrow-lost-found'}}>
    <a>
    <h3>{post.title}</h3>
    </a>
  </Link>
)

export default PostItem