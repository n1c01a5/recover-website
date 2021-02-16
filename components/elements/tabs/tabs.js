import { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import Tab from './tab'

import styles from '../../../styles/elements/tabs/tabs.module.scss'

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
}

const TabsContext = createContext(null)

export default function Tabs ({ children = [] }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label)
  const onClickTabItem = (tab) => setActiveTab(tab)

  return (
    <TabsContext.Provider value={{ onClickTabItem, activeTab, setActiveTab }}>
      <div className={`${styles.tabs}`}>
        <div
          className={`${styles.tabContent} ${children[0].props.label !== activeTab ? styles.tabContentMask : ''}`}
        >
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined
            return child.props.children
          })}
        </div>

        <ul className={`${styles.tabList}`}>
          {children.map((child) => {
            return (
              <Tab
                key={child.props.label}
                activeTab={activeTab}
                label={child.props.label}
              />
            )
          })}
        </ul>
      </div>
    </TabsContext.Provider>
  )
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
}

export function useTabContext () {
  return useContext(TabsContext)
}

export function TabsItem ({ children, label }) {
  return <div data-label={label}>{children}</div>
}
