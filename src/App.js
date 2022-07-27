import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AllUsersPage from './pages/AllUsersPage';
import ProfilePage from './pages/ProfilePage';
import ChangePhotoPage from './pages/ChangePhotoPage';
import Toolbar from './components/Toolbar';




function App() {

    

     return (

            <div className="App">

              <BrowserRouter>
                <Toolbar/>
                <Routes>
                    <Route path='/' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage/>}/> 
                    <Route path='/allusers' element={<AllUsersPage/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                    <Route path='/changephoto' element={<ChangePhotoPage />}/>
                </Routes>
              
              
              </BrowserRouter>
            
            </div>
            
    );
   
}

export default App;




