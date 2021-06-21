import React from "react"
import { useContext } from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import GlobalContext from "../context/globalContext"

import Dashboard from "./dashboard/Dashboard"
import WelcomePage from "./welcome/Welcome"
import Header from "../components/header/Header"

import PrivateRoute from "../hoc/PrivateRoute"

function Router() {
  const { userInfo } = useContext(GlobalContext)
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route
          exact
          path='/dashboard'
          render={() =>
            userInfo !== "loading" && <PrivateRoute component={Dashboard} />
          }
        />
        <Redirect to='/' />
      </Switch>
    </>
  )
}

export default Router
