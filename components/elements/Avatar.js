const Avatar = ({ title, name, designation }) => (
  <div className={`author author-${title}`}>
    <div className="author-image"></div>
    <div className="author-desc">
      <p>{name.toUpperCase()}</p>
      <p className="last-para">{designation.toUpperCase()}</p>
    </div>
  </div>
)

export default Avatar
