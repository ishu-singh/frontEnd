
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js'
import Register from './components/Register.js'
import News from './components/News.js'
import AdminUsersDetails from './components/Admin_Users_Details.js';
import Feedback from './components/Admin-Feedback.js';
import MainPage from './components/MainPage.js'
function App() {
  return (

    <Router>

    <Routes>


    <Route path='/login' exact element={<Login/>}/>
    
    <Route path='/register' exact element={<Register/>}/>
    
    <Route path='/news' exact element={<News/>}/>

    <Route path='/adminusers' exact element={<AdminUsersDetails/>}/>

    <Route path='/adminfeedback' exact element={<Feedback/>}/>

    <Route path='/mainpage' exact element={<MainPage/>}/>



    </Routes>


    </Router>


  );
}

export default App;
