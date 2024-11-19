import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';
import LoginPage from './Pages/LoginPage.js';
import RegisterPage from './Pages/RegisterPage.js';
import HomePage from './Pages/HomePage.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path="/" element = {<LoginPage></LoginPage>}></Route>
            <Route path="/register" element = {<RegisterPage></RegisterPage>}></Route>
            <Route path="/home" element = {<HomePage></HomePage>}></Route>
            <Route path="*" element = {<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
