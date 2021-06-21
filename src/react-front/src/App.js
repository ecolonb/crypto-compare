import GlobalStore from "./store/globalStore"
import Router from "./pages/Router"
import "./App.css"

function App() {
  return (
    <GlobalStore>
      <Router />
    </GlobalStore>
  )
}

export default App
