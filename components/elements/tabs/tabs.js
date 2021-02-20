import React, { createElement, useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import Tab from './tab'

import styles from '../../../styles/elements/tabs/tabs.module.scss'

const TabsContext = createContext({ setActiveTab: null })

export default function Tabs ({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
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
          {children.map((child) => (
            <Tab
              key={child.props.label}
              activeTab={activeTab}
              label={child.props.label}
            />
          ))}
        </ul>
      </div>
    </TabsContext.Provider>
  )
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
}

Tabs.defaultProps = {
  children: [
    <TabsItem key='tab 1' label='tab 1' />,
    <TabsItem key='tab 2' label='tab 2' />
  ]
}

export function useTabContext () {
  return useContext(TabsContext)
}

export function TabsItem ({ children, label }) {
  return <div data-label={label}>{children}</div>
}
