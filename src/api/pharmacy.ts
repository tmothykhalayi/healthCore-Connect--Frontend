import axios from '../lib/axios';
import type { pharmacyDto, UpdatePharmacyDto } from '../Types/interface';


//get all pharmacy 
export const getPharmacy= async () => {
  const response = await axios.get('/pharmacy');
  return response.data;
};

//create a new pharmacy
export const createPharmacy = async (data: pharmacyDto) => {
  const response = await axios.post('/pharmacy', data);
  return response.data;
}

//update pharmacy
export const updatePharmacy = async (id: string, data: UpdatePharmacyDto) => {
  const response = await axios.put(`/pharmacy/${id}`, data);
  return response.data;
};


//delete pharmacy
export const deletePharmacy = async (id: string) => {
  const response = await axios.delete(`/pharmacy/${id}`);
  return response.data;
};
