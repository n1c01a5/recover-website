import styles from '../../styles/elements/avatar.module.scss'

const Avatar = ({ tag, name, designation, image }) => (
  <div className={styles.author}>
    <div
      className={styles.authorImage}
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className={styles.authorDesc}>
      <p className={styles.authorName}>{name.toUpperCase()}</p>
      <p className={styles.lastParagraph}>{designation.toUpperCase()}</p>
    </div>
  </div>
)

export default Avatar
