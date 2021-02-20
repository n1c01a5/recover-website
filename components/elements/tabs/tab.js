import PropTypes from 'prop-types'

import { useTabContext } from './tabs'

import styles from '../../../styles/elements/tabs/tab.module.scss'

const Tab = ({ activeTab, label }) => {
  const { setActiveTab } = useTabContext()

  return (
    <li
      className={`${styles.tabListItem} ${activeTab === label ? styles.tabListActive : ''}`}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </li>
  )
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

Tab.defaultProps = {
  activeTab: '',
  label: 'Tab 1'
}

export default Tab
