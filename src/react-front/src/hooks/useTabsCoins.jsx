import { useState } from "react"

function useTabsCoins(initialTab) {
  const [currentTabIndex, setCurrentTabIndex] = useState(initialTab)

  const setNewIndex = (index) => {
    setCurrentTabIndex(index)
  }

  return {
    currentTabIndex,
    setNewIndex,
  }
}

export default useTabsCoins
