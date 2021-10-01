import { Route, Switch } from "react-router"
import { Home } from "../Components/home/home"
import Navbar from "../Components/Nav/Navbar"
import FeedPage from "../Pages/FeedPage"
import { Jobs } from "../Pages/jobs"
import { Network } from "../Pages/network"
import { Notifications } from "../Pages/notification"
import { ProfilePage } from "../Pages/ProfilePage"
import Join from "../Pages/Join"
import Login from "../Pages/Login"
export function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/join" exact>
          <Join />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/feed">
          <Navbar />
          <FeedPage />
        </Route>
        <Route path="/jobs">
          <Navbar />
          <Jobs />
        </Route>
        <Route path="/network">
          <Navbar />
          <Network />
        </Route>
        <Route path="/notification">
          <Navbar />
          <Notifications />
        </Route>
        <Route path="/profile">
          <Navbar />
          <ProfilePage />
        </Route>
      </Switch>
    </>
  )
}
