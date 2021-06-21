import { useState, useEffect } from "react"
import socketIOClient from "socket.io-client"
const ENDPOINT = process.env.REACT_APP_SOCKET_ENDPOINT

function useCurrentCoinsValue(toConvert) {
  console.log(toConvert, ENDPOINT)
  const [allCurrentCoinsValue, setAllCurrentCoinsValue] = useState([])
  const [lastUpdateCoinsValue, setLastUpdateCoinsValue] = useState({
    BTC: { MXN: 0 },
    ETH: { MXN: 0 },
    XRP: { MXN: 0 },
  })
  useEffect(() => {
    const socketIo = socketIOClient(ENDPOINT)
    socketIo.emit("firstUpdate", null)

    socketIo.on("updateCoins", (data) => {
      console.log(data)
      setLastUpdateCoinsValue(data?.coins_value)
      setAllCurrentCoinsValue((response) => [data, ...response])
    })

    return () => {
      console.log("UnmountComponent")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => console.log(allCurrentCoinsValue), [allCurrentCoinsValue])
  return { allCurrentCoinsValue, lastUpdateCoinsValue }
}

export default useCurrentCoinsValue
