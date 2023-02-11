import './App.css';
import Register from './components/register';
import Home from './components/home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/login';
import Addbook from './components/addbook';
import Book from './components/book';

function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/addbook' element={<Addbook/>}/>
        <Route path='/book' element={<Book/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
