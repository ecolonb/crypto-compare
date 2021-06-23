import { useContext, useEffect } from "react"
import WelcomeForm from "../../components/welcome-form/WelcomeForm"
import GlobalContext from "../../context/globalContext"
import "./welcome.scss"

function WelcomePage({ history }) {
  const { userInfo } = useContext(GlobalContext)
  useEffect(() => {
    if (userInfo && userInfo !== "loading") history.push("/dashboard")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo])
  return (
    <div className='welcome-page'>
      <WelcomeForm history={history} />
    </div>
  )
}

export default WelcomePage
