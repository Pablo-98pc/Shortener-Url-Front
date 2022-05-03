
import './App.css';
import {LoginPage} from './components/Login/LoginPage';
import {Home} from './components/Home/Home';
import {Route,Routes} from 'react-router-dom'
import {Profile} from './components/Profile/Profile'


function App() {

  return <main className='main-container'><Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Profile' element={<Profile/>}/>
  </Routes>
  </main>
  
}

export default App;
