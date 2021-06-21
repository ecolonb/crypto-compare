import { useContext, useEffect } from "react"
import WelcomeForm from "../../components/welcome-form/WelcomeForm"
import Loading from "../../components/loading/Loading"
import GlobalContext from "../../context/globalContext"
import "./welcome.scss"

function WelcomePage({ history }) {
  const { isLoading, userInfo } = useContext(GlobalContext)
  useEffect(() => {
    if (userInfo && userInfo !== "loading") history.push("/dashboard")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo])
  return (
    <>
      <div className='welcome-page'>
        <WelcomeForm history={history} />
      </div>
      <Loading
        message={
          <>
            ¡Please, wait! <br /> Loading
          </>
        }
        show={isLoading}
      />
    </>
  )
}

export default WelcomePage
