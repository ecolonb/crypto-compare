import { useState, useEffect } from "react"
import socketIOClient from "socket.io-client"

import logo from "./logo.svg"
import "./App.css"

const ENDPOINT = "http://localhost:5000"

function App() {
  console.log(ENDPOINT)
  const [response, setResponse] = useState([])

  useEffect(() => {
    const socketIo = socketIOClient(ENDPOINT)
    const idInterval = setInterval(() => {
      socketIo.emit("updateCoin", "getNews")
    }, 15000)

    socketIo.on("receivedUpdateCoin", (data) => {
      console.log(data)
      setResponse((response) => [data, ...response])
    })

    return () => {
      console.log("Deleting interval")
      clearInterval(idInterval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log("response->changing: ", response)
  }, [response])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="message">
        <pre>{JSON.stringify(response)}</pre>
      </div>
    </div>
  )
}

export default App
