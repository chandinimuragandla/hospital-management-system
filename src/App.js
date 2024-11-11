import React,{useState} from 'react';
import DoctorList from './Components/DoctorList';
import PatientList from './Components/PatientList';
import AppointmentForm from './Components/AppointmentForm';

import './App.css';

const App = ()=> {
  const [selectedDoctor ,setselectedDoctor]= useState(null);
  return (
    <div className="App">
      <h1> Hospital Management System</h1>
      <div style ={{display: 'flex' ,gap: '20px'}}>
        <DoctorList onSelectDoctor={setselectedDoctor} />
          {selectedDoctor && <AppointmentForm selectedDoctor={selectedDoctor}/>}
      </div>
     <PatientList />
    </div>
  );
}

export default App;
