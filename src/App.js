import { ShortIdPage } from './components/ShortIdPage/ShortIdPage';
import {LoginPage} from './components/Login/LoginPage';
import {Home} from './components/Home/Home';
import {Route,Routes} from 'react-router-dom'
import {Profile} from './components/Profile/Profile'
import { createContext,useState } from 'react';

export const UserContext = createContext(null);

function App() {
  const [ user , setUser ] = useState({})

  return <UserContext.Provider value={[user,setUser]}>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/:shortid' element={<ShortIdPage/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
  </UserContext.Provider>
}

export default App;
