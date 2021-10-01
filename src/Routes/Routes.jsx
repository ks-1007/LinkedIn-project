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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/feed">
          <Navbar />
          <FeedPage />
        </Route>
        <Route exact path="/jobs">
          <Navbar />
          <Jobs />
        </Route>
        <Route exact path="/network">
          <Navbar />
          <Network />
        </Route>
        <Route exact path="/notification">
          <Navbar />
          <Notifications />
        </Route>
        <Route exact path="/profile">
          <Navbar />
          <ProfilePage />
        </Route>
        <Route exact path="/create-user">
          <UserCreateForm />
        </Route>
      </Switch>
    </>
  )
}
