

import "./sb-admin-2.min.css"
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Login from './Login';
import Portal from "./Components/Portal";
import Dashboard from "./Components/Dashboard";
import { UserProvider } from "./UserContext";
import { useState } from "react";
import AddStudent from "./Components/AddStudent";
import View from "./Components/View";
import Edit from "./Components/Edit";

function App() {
  const [Student,setStudent]=useState([
    {
      id:'1',
      name:"Gunal",
      gender:"Male",
      gpa:"9.2",
     dob:"15/11/1998",
      average:"92%",
      father:"Nandakumar",
      mother:"Deepa",
      num:"9789418844",
      job:"Govt Employee",
    },
    {
      id:'2',
      name:"Karthick",
      gender:"Male",
      gpa:"8.5",
     dob:"15/06/1998",
      average:"85%",
      father:"Shanmugam",
      mother:"Kala",
      num:"9952524218",
      job:"Driver",
    },
    {
      id:'3',
      name:"Navin",
      gender:"Male",
      gpa:"8.7",
     dob:"25/11/1998",
      average:"87%",
      father:"Sekar",
      mother:"Sangeetha",
      num:"8189874047",
      job:"Buisiness",
    },
    {
      id:'4',
      name:"Prasanth",
      gender:"Male",
      gpa:"7.2",
     dob:"06/06/1998",
      average:"72%",
      father:"Elango",
      mother:"Kavitha",
      num:"9944227865",
      job:"Welder",
    },
    {
      id:'5',
      name:"Karthikeyan",
      gender:"Male",
      gpa:"8.6",
     dob:"18/04/1999",
      average:"86%",
      father:"Palani",
      mother:"Vidya",
      num:"9952050981",
      job:"HR",
    },
    {
      id:'6',
      name:"Gokul",
      gender:"Male",
      gpa:"7.1",
     dob:"21/10/1997",
      average:"71%",
      father:"Kathir",
      mother:"Devi",
      num:"9444650657",
      job:"Surveyor",
    },
    {
      id:'7',
      name:"Ganesh",
      gender:"Male",
      gpa:"7.4",
     dob:"19/05/1997",
      average:"74%",
      father:"Murali",
      mother:"Geetha",
      num:"9138049301",
      job:"Shutter Works",
    },
    {
      id:'8',
      name:"Abishek",
      gender:"Male",
      gpa:"7.9",
     dob:"07/02/2000",
      average:"79%",
      father:"Mugunthan",
      mother:"Kuttyma",
      num:"9025742442",
      job:"Finance",
    },
      ])
  
  return (
    <div className="App">
      <BrowserRouter>
      <UserProvider>
      <Routes>
        <Route path='/' element={<Login/>} style={{backgroundColor:"#DBF477"}}/>
        <Route path='/portal' element={<Portal/>}>
    
<Route path='dashboard' element={<Dashboard  Student={Student} setStudent={setStudent}/>}/>
<Route path='add' element={<AddStudent  Student={Student} setStudent={setStudent}/> }/>
<Route path="view/:id" element={<View Student={Student}/>}/>
<Route path="edit/:id" element={<Edit   Student={Student} />}/>
</Route>
      </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
