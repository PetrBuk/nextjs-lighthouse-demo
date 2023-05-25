import { useState } from 'react'

import { Tab } from '@project/types/types'

type TabsProps = {
  tabs: Tab[]
  // eslint-disable-next-line no-unused-vars
  handleSelect: (tab: Tab) => void
}

const Tabs = ({ tabs, handleSelect }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0])

  const handleTabSelect = (tab: Tab) => {
    setSelectedTab(tab)
    handleSelect(tab)
  }

  return (
    <ul
      className="divide-x divide-gray-200 rounded-lg text-center text-sm font-medium text-gray-500 shadow dark:divide-gray-700 dark:text-gray-400 sm:flex"
      id="myTab"
      role="tablist"
    >
      {tabs.map((tab) => {
        return (
          <li
            key={tab.title}
            role="tab"
            onClick={() => handleTabSelect(tab)}
            className={`inline-block w-full p-4 uppercase ${
              tab.title === selectedTab.title
                ? 'bg-gray-200 dark:bg-gray-700'
                : 'bg-gray-50 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white'
            }`}
          >
            {tab.title}
          </li>
        )
      })}
    </ul>
  )
}

export default Tabs
