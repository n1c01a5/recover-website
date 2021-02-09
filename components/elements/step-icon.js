import styles from '../../styles/elements/step-icon.module.scss'

// status <string>: 'default' | 'active' | 'checked
// status <number>: 1
const StepIcon = ({ state, indexStep }) => (
  <div
    className={`
      ${styles.stepIcon}
      ${state === 'default'
        ? styles.default
        : state === 'active'
          ? styles.active
          : styles.checked
      }`}
  >
    {
      state !== 'checked'
        ? ++indexStep
        : (
          <img
            className={styles.iconChecked}
            src='/check-mark-black-outline.svg'
            alt='Checked Icon Stepper'
          />)
    }
  </div>
)

export default StepIcon
