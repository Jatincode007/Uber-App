import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './UserContext/UserContext.jsx'

createRoot(document.getElementById('root')).render(

  <UserContext> 
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </UserContext>
  ,
)
