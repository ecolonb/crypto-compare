import { useContext } from "react"

import { FaRegShareSquare } from "react-icons/fa"
import GlobalContext from "../../context/globalContext"

import "./header.scss"

function Header() {
  const { userInfo, setUserInfo } = useContext(GlobalContext)
  const handleLogOut = () => {
    sessionStorage.clear()
    setUserInfo(undefined)
  }
  return (
    <div className='header-component'>
      {userInfo ? (
        <>
          <h3 className='user-info'>
            {"Hello, ".concat(userInfo.firstName, " ", userInfo.lastName)}
          </h3>
          <button onClick={handleLogOut}>
            <FaRegShareSquare size={30} />
          </button>
        </>
      ) : (
        <h3 className='user-info'>Welcome to Crypto Compare</h3>
      )}
    </div>
  )
}

export default Header
