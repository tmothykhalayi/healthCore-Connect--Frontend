import type { CreateMedicineDto, UpdateMedicineDto } from '@/Types/interface';
import axios from '../lib/axios';

//fetch all medicines
export const getMedicines = async () => {
  const response = await axios.get('/medicines');
  return response.data;
}


//create a new medicine 
export const createMedicine = async (data: CreateMedicineDto) => {
  const response = await axios.post('/medicines', data);
  return response.data;
}

//update medicine
export const updateMedicine = async (id: string, data: UpdateMedicineDto) => {
  const response = await axios.patch(`/medicines/${id}`, data);
  return response.data;
}

///delete medicine
export const deleteMedicine = async (id: string) => {
  const response = await axios.delete(`/medicines/${id}`);
  return response.data;
}

export const getMedicineStats = async () => {
  const response = await axios.get('/medicines/stats');
  return response.data?.data || { total: 0 };
};