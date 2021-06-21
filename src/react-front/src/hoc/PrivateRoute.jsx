import { useContext } from "react"
import { Redirect } from "react-router-dom"
import GlobalContext from "../context/globalContext"

function PrivateRoute({ component: Component, ...props }) {
  const { userInfo } = useContext(GlobalContext)
  return userInfo ? <Component {...props} /> : <Redirect to='/' />
}

export default PrivateRoute
