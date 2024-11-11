import React, {useEffect,useState} from 'react';
import { addPatient } from '../Services/api';

const PatientList = () => {
 const [patients ,setPatients] =useState([]);



 useEffect(()=>{
    addPatient().then(response => setPatients(response.data));
 },[]);



  return (
    <div>
        <h2>Patients</h2>

        <ul>
            {patients.map(patient =>(
                <li key={patient.id}>
                    {patient.name} - Appointment with {patient.appointment}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default PatientList;