import { Redirect } from "react-router-dom"
import {Route, Switch} from "react-router-dom"
import AboutUs from "../Pages/AboutUs"
import Devs from "../Pages/Devs"
import HomeClient from "../Pages/HomePageClient"
import HomeCollector from "../Pages/HomePageCollector"
import LandingPage from "../Pages/LandingPage"
import { RefactorPage } from "../Pages/Refactor"
import Videos from "../Pages/Videos"
import { useAuth } from "../Providers/IsAuth"
import { useUser } from "../Providers/user"

const Routes = () => {
  const {auth} = useAuth()
  const {user} = useUser()

  return(
    <Switch>
      <Route exact path="/">
        {auth ? <Redirect to={`/${user.type}`}/> : <LandingPage/>}
      </Route>

      <Route exact path="/client">
        {auth ? <HomeClient/> :  <Redirect to='/' />}
      </Route>

      <Route exact path="/collector">
        {auth ? <HomeCollector/> : <Redirect to='/' />}
      </Route>

      <Route exact path="/videos">
        <Videos/>
      </Route>

      <Route exact path="/devs">
        <Devs/>
      </Route>

      <Route exact path="/aboutus">
        <AboutUs/>
      </Route>

      <Route exact path="/refact">
        <RefactorPage/>
      </Route>
    </Switch>

  )
}

export default Routes