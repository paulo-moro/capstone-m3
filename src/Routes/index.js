import { Route, Switch } from "react-router-dom"
import AboutUs from "../Pages/AboutUs"
import Devs from "../Pages/Devs"
import HomeClient from "../Pages/HomePageClient"
import HomeCollector from "../Pages/HomePageCollector"
import LandingPage from "../Pages/LandingPage"
import Videos from "../Pages/Videos"

const Routes = () => {

  return(
    <Switch>
      <Route exact path="/">
        <LandingPage/>
      </Route>

      <Route path="/client/">
        <HomeClient/>
      </Route>

      <Route exact path="/collector">
        <HomeCollector/>
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
    </Switch>

  )
}

export default Routes