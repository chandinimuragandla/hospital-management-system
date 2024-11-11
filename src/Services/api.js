
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getDoctors = () => axios.get(`${API_URL}/doctors`);
export const getPatients = () => axios.get(`${API_URL}/patients`);
export const addPatient = (patient) => axios.post(`${API_URL}/patients`, patient);
