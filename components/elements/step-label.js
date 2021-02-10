import styles from '../../styles/elements/step-label.module.scss'

// status <string>: 'default' | 'active' | 'checked
const StepLabel = ({ state, label, isOptional }) => (
  <div
    className={`
      ${styles.stepLabel}
      ${state === 'default'
        ? styles.default
        : state === 'active'
          ? styles.active
          : styles.checked
      }`}
  >
    <p className={styles.content}>
      {label} {isOptional ? <span className={styles.optionalLabel}><br />Optional</span> : ''}
    </p>
  </div>
)

export default StepLabel
