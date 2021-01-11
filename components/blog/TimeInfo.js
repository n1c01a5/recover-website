import styles from '../../styles/blogs/TimeInfo.module.scss'

const TimeInfo = ({ readTime, date }) => (
  <div className={styles.timeInfo}>
    <p>
      {readTime} MIN READ - {date}
    </p>
  </div>
)

export default TimeInfo
