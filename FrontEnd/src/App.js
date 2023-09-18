import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Department } from './Components/Student/Department/department';
import { Main } from './Components/Student/Landing/main';
import { Student } from './Components/Student/inward/Student';
import { Admin } from './Components/Student/Admin/admin';
import { Login } from './Components/Student/Login/login';
import { StudentInfo } from './Components/Student/information/info';
import { StudentReg } from './Components/Student/StudentDetails/studentreg'
import { Mainn } from './Components/Crud/main/main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Mainn/>]}></Route>
          {/* <Route path='/login' element={[<Log/>]}></Route>
          <Route path='/entry' element={[<Employe/>]}></Route> */}
          {/* <Route path='/' element={[<Main/>]}></Route>
          <Route path='/Admin' element={[<Admin/>]}></Route>
          <Route path='/Login' element={[<Login/>]}></Route>
          <Route path='/Department' element={[<Department/>]}></Route>
          <Route path='/Student' element={[<Student/>]}></Route>
          <Route path='/StudentReg' element={[<StudentReg/>]}></Route> */}
          {/* <Route path='/' element={[<Department/>]}></Route>
          <Route path='/Student' element={[<Student/>]}></Route>
          <Route path='/StudentReg' element={[<StudentInfo/>]}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
