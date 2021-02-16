import PropTypes from 'prop-types'

import { useTabContext } from './tabs'

import styles from '../../../styles/elements/tabs/tab.module.scss'

const Tab = ({ activeTab = '', label = '' }) => {
  const { onClickTabItem } = useTabContext()
  const changeTab = () => onClickTabItem(label)

  return (
    <li
      className={`${styles.tabListItem} ${activeTab === label ? styles.tabListActive : ''}`}
      onClick={changeTab}
    >
      {label}
    </li>
  )
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Tab
