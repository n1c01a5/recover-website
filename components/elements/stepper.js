import StepIcon from './step-icon'
import StepLabel from './step-label'

import styles from '../../styles/elements/stepper.module.scss'

const INDEX_OPTIONAL_STEP = 2

// steps <array>: ['Personnal Details', 'TransferDai']
// indexActiveStep <number>: 2
const Stepper = ({ steps, indexActiveStep }) => (
  <div className={styles.stepper}>
    {steps.map((step, indexStep) => (
      <div className={styles.stepWithLabelAndConnection} key={indexStep}>
        <div className={styles.stepWithConnection}>
          <div className={styles.stepContainerConnection}>
            {indexStep !== 0
              ? <div className={styles.stepConnection}>&nbsp;</div>
              : ''}
          </div>
          <StepIcon
            state={indexStep === indexActiveStep
              ? 'active'
              : indexStep < indexActiveStep
                ? 'checked'
                : 'default'}
            indexStep={indexStep}
          />
          <div className={styles.stepContainerConnection}>
            {steps.length - 1 !== indexStep
              ? <div className={styles.stepConnection}>&nbsp;</div>
              : ''}
          </div>
        </div>
        <StepLabel
          state={indexStep === indexActiveStep
            ? 'active'
            : indexStep < indexActiveStep
              ? 'checked'
              : 'default'}
          label={steps[indexStep]}
          isOptional={indexStep === INDEX_OPTIONAL_STEP}
        />
      </div>)
    )}
  </div>
)

export default Stepper
