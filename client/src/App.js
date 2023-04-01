import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log(123);
    axios.get('http://localhost:3001/api/data').then((result)=>{
      console.log("RESULT==>",result.data.data);
    }).catch((error)=>{
      console.log(error);
    })
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
