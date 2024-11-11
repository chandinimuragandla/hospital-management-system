import React , {useEffect , useState} from 'react'
import { addPatient} from '../Services/api';

const AppointmentForm = ({selectedDoctor}) => {
    const [name ,setName] =useState('');

    const handleSubmit =(e) => {
        e.preventdefault();
        const newPatient ={name, appointment :selectedDoctor.name};
        addPatient(newPatient).then(()=>{
            alert('Appointment booked!');
        });
    };



  return (
    <div>
        <h2>Book AppointmentForm with {selectedDoctor}</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e)=> setName(e.target.ariaValueNow)}
            />
            <button type='submit'>Book Now</button>
        </form>
    </div>
  );
};

export default AppointmentForm;