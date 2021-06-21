import { useState, useEffect } from "react"

import GlobalContext from "../context/globalContext"

function GlobalStore({ children }) {
  const [userInfo, setUserInfo] = useState("loading")
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    console.log(JSON.parse(sessionStorage.getItem("userInfo")))
    setUserInfo(JSON.parse(sessionStorage.getItem("userInfo")))
  }, [])
  useEffect(() => {
    console.log(userInfo)
    if (userInfo && userInfo !== "loading") {
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
    }
  }, [userInfo])
  return (
    <GlobalContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStore
