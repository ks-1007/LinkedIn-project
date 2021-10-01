import "./App.css"
import { Home } from "./Components/home/home"
import { Jobs } from "./Pages/jobs"
import { Network } from "./Pages/network"
import { Notifications } from "./Pages/notification"
import { ProfilePage } from "./Pages/ProfilePage"
// {/* <Home/> */}
//       {/* <Network/> */}
//       {/* <Jobs/> */}
//       {/* <Notifications/> */}

function App() {

  return (
    <div className="app">
      <ProfilePage />
    </div>

  )
}

export default App
