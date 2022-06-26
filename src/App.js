import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import CheckAppoints from './Components/CheckAppoints/CheckAppoints';
import AppointSuccess from './Components/Home/AppointSuccess/AppointSuccess';
import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services/Services';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';
import SignIn from './Components/SignIn/SignIn';
import SignOut from './Components/SignOut/SignOut';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signout' element={<SignOut></SignOut>}></Route>
        <Route path='/checkapoint' element={
          <RequireAuth>
            <CheckAppoints></CheckAppoints>
          </RequireAuth>
        } ></Route>
        <Route path='/successapooint' element={<AppointSuccess></AppointSuccess>} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
