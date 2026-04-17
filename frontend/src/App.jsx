import Home  from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import InterviewPage from './pages/interviewPage';
import { useEffect } from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { setUserData } from './redux/userSlice';
import InterviewHistory from './pages/InterviewHistory';
import Pricing from './pages/Pricing';
import InterviewReport from './pages/InterviewReport';

export const ServerUrl = "https://careerbit-1.onrender.com"
function App() {
  const dispatch = useDispatch();

  useEffect(() =>{
    const getUser = async () =>{
      const token = localStorage.getItem("token")
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user",
          {
            withCredentials: true,
            headers: token ? { Authorization: `Bearer ${token}` } : {}
          }
        )
        dispatch(setUserData(result.data))
      } catch (error) {
        console.log(error)
        dispatch(setUserData(null))
      }
    }

    getUser();
  },[dispatch])
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/interview' element={<InterviewPage/>}/>
      <Route path='/history' element={<InterviewHistory/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/report' element={<InterviewReport/>}/>

    </Routes>
  )
}

export default App