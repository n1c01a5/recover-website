const Avatar = ({ tag, name, designation, image }) => (
  <div className={`author author-${tag}`}>
    <div
      className="author-image"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="author-desc">
      <p>{name.toUpperCase()}</p>
      <p className="last-para">{designation.toUpperCase()}</p>
    </div>
  </div>
)

export default Avatar
