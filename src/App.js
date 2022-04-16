import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Shared/Login/Login';
import Signup from './pages/Shared/Signup/Signup';
import Products from './pages/Products/Products/Products';
import Breakfast from './pages/Products/Breakfast/Breakfast';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/' element={<Products></Products>}>
          <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
