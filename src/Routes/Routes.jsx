import { Route, Switch } from "react-router"
import { Home } from "../Components/home/home"
import Navbar from "../Components/Nav/Navbar"
import FeedPage from "../Pages/FeedPage"
import { Jobs } from "../Pages/jobs"
import { Network } from "../Pages/network"
import { Notifications } from "../Pages/notification"
import { ProfilePage } from "../Pages/ProfilePage"
import Join from "../Components/JoinLoginForm/Join"
import Login from "../Components/JoinLoginForm//Login"
import { UserCreateForm } from "../Pages/UserCreateForm"
import { Connections } from "../Pages/Connections"
import { OthersProfilePage } from "../Pages/OthersProfile"

export function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/join">
          <Join />
        </Route>

        {/* <Route path="/join/form" exact>
          <UserCreateForm/>
        </Route> */}
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/network">
          <Network />
        </Route>
        <Route exact path="/network/connections">
          <Connections />
        </Route>
        <Route exact path="/notification">
          <Notifications />
        </Route>
        <Route exact path="/profile/:email">
          
          <ProfilePage />
        </Route>
        <Route exact path="/othersprofile/:email">
          <OthersProfilePage />
        </Route>
        <Route exact path="/create-user/:email">
          <UserCreateForm />
        </Route>
      </Switch>
    </>
  )
}
