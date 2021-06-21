import { useContext } from "react"
import GlobalContext from "../../context/globalContext"
import Dashboard from "../../components/dashboard/Dashboard"
import Loading from "../../components/loading/Loading"

import "./dashboard.scss"

function DashboardPage() {
  const { isLoading } = useContext(GlobalContext)
  return (
    <>
      <div className='dashboard-page'>
        <Dashboard />
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

export default DashboardPage
