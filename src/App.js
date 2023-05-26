import {Routes, Route} from 'react-router-dom';
import {Home, Login, Navbar, Registrasiya} from './components/index';
import AuthService from './service/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { siginUserSuccsess } from './redux/Auth';
import { getItem } from './helpers/Persistence-storage';

function App() {

  const dispatch = useDispatch();

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(siginUserSuccsess(response.user))
    } catch (error) {
      console.log('Error');
    }
  }

  useEffect(() => {
    const token = getItem('token');
    if(token){
      getUser()
    }
  }, [])

  return (
    <main className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registrasiya />} />
      </Routes>
    </main>
  );
}

export default App;
