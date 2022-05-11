import {Route, Switch} from "react-router-dom"
import HomeClient from "../Pages/HomePageClient"
import HomeCollector from "../Pages/HomePageCollector"
import LandingPage from "../Pages/LandingPage"
import Register from "../Pages/Register"

const Routes = () => {

  return(
    <Switch>
      <Route exact path="/">
        <LandingPage/>
      </Route>

      <Route exact path="/register">
        <Register/>
      </Route>

      <Route exact path="/client">
        <HomeClient/>
      </Route>

      <Route exact path="/collector">
        <HomeCollector/>
      </Route>

    </Switch>

  )
}

export default Routes