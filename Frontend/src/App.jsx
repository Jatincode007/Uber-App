import './index.css'

import {Routes,Route} from 'react-router-dom'
import LoginUser from './Pages/LoginUser'
import UberStart from './Pages/UberStart'
import UserSignUp from './Pages/UserSignUp'
import LoginCaptain from './Pages/LoginCaptain'
import CaptainSignUp from './Pages/CaptainSignUp'
import UberHome from './Pages/UberHome'








function App() {

 
  

  return (
    <>
    <Routes>
      <Route path='/' element={<UberStart/>} />
      <Route path='/home' element={<UberHome/>} />
      <Route path='/userlogin' element={<LoginUser/>} />
      <Route path='/createuser' element={<UserSignUp/>} />
      <Route path='/captainlogin' element={<LoginCaptain/>} />
      <Route path='/captainsignup' element={<CaptainSignUp/>} />
    </Routes>
    

   
      
    </>
  )
}

export default App
