import axios from '../lib/axios';
import type { CreatePharmacistDto, UpdatePharmacistDto } from '../Types/interface';

// Get all pharmacists
export const getPharmacists = async () => {
  const response = await axios.get('/pharmacists');
  return response.data;
};

// Create a new pharmacist
export const createPharmacist = async (data: CreatePharmacistDto) => {
  const response = await axios.post('/pharmacists', data);
  return response.data;
};

// Update pharmacist
export const updatePharmacist = async (id: string, data: UpdatePharmacistDto) => {
  const response = await axios.put(`/pharmacists/${id}`, data);
  return response.data;
};

// Delete pharmacist
export const deletePharmacist = async (id: string) => {
  const response = await axios.delete(`/pharmacists/${id}`);
  return response.data;
}; 