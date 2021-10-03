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
<<<<<<< HEAD
import FeedPage2 from "../Pages/FeedPage2"
=======
import { Connections } from "../Pages/Connections"
import { OthersProfilePage } from "../Pages/OthersProfile"
>>>>>>> cc42d337bc0e26557e1fd83520ed8eecbbfcf4b2

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
          <Navbar />
          <FeedPage2 />
        </Route>
        <Route exact path="/jobs">
          <Navbar />
          <Jobs />
        </Route>
        <Route exact path="/network">
          <Navbar />
          <Network />
        </Route>
        <Route exact path="/network/connections">
          <Navbar />
          <Connections />
        </Route>
        <Route exact path="/notification">
          <Navbar />
          <Notifications />
        </Route>
        <Route exact path="/profile/:email">
          <Navbar />
          <ProfilePage />
        </Route>
        <Route exact path="/othersprofile/:email">
          <Navbar />
          <OthersProfilePage />
        </Route>
        <Route exact path="/create-user/:email">
          <UserCreateForm />
        </Route>
      </Switch>
    </>
  )
}
