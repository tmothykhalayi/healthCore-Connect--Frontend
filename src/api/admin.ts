import axios from '../lib/axios';

export const getAdmins = async () => {
  const response = await axios.get('/admins');
  return response.data;
}

import type { createAdminDto ,updateAdminDto } from '@/Types/interface';


//create a new admin
export const createAdmin = async (data: createAdminDto) => {
  const response = await axios.post('/admins', data);
  return response.data;
} 


//update an admin
export const updateAdmin = async (id: string, data: updateAdminDto) => {
  const response = await axios.put(`/admins/${id}`, data);
  return response.data;
};

//delete an admin
export const deleteAdmin = async (id: string) => {
  const response = await axios.delete(`/admins/${id}`);
  return response.data;
};

export const getAdminStats = async () => {
  const response = await axios.get('/admin/stats');
  return response.data.data; // adjust if your API wraps data differently
};

