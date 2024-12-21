import { Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Navbar from './Components/Navbar'
import Error from './Components/Error'
import Requests from "./Pages/Requests"
import UserDetails from './UserDetails'
import Post from "./Pages/Post"
function App(){
    return(
      <>
      

      <Navbar />
      <Routes>
        <Route path='/' element={<Requests/>} />
        <Route path = '/about' element={<About />} />
        <Route path= '*' element= {<Error />}/>
        <Route path = '/requests' element={<Requests/>}/>
        <Route path = '/:username' element={<UserDetails/>}/>
        <Route path  = '/post/:id' element={<Post />} />
        

      </Routes>
      </>
    )



}

export default App;

