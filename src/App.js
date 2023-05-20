import {Routes, Route} from 'react-router-dom';
import {Home, Login, Navbar, Registrasiya} from './components/index';

function App() {
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
