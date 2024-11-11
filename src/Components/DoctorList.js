import React ,{useEffect,useState}from 'react'
import { getDoctors } from '../Services/api';

const DoctorList = ({onSelectDoctor}) => {
    const [doctors,setDoctors] = useState([]);



   useEffect(()=>{
    getDoctors().then(response => setDoctors(response.data));
   },[]); 
  return (
    <div>
       <h2> Doctors</h2>
       <ul>
        {doctors.map(doctor => (
            <li key={doctor.id} onClick={() => onSelectDoctor(doctor)}>
                {doctor.name} - {doctor.application}
            </li>
        ))}
       </ul>
    </div>
  );
};

export default DoctorList;