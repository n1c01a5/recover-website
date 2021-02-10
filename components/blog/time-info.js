import styles from '../../styles/blogs/time-info.module.scss'

const TimeInfo = ({ readTime, date }) => (
  <div className={styles.timeInfo}>
    <p>
      {readTime} MIN READ - {date}
    </p>
  </div>
)

export default TimeInfo
