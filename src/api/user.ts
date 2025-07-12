
import type { UpdateUserDto ,CreateUserDto } from '../Types/interface';
import axios from '../lib/axios';

//fetch all users
export const getUsers = async () => {
  const response = await axios.get('/users');
  return response.data;
}

//create a new user
export const createUser = async (data: CreateUserDto) => {
  const response = await axios.post('/users', data);
  return response.data;
}

//update user
export const updateUser = async (id: string, data: UpdateUserDto) => {
  const response = await axios.put(`/users/${id}`, data);
  return response.data;
}

//delete user
export const deleteUser = async (id: string) => {
  const response = await axios.delete(`/users/${id}`);
  return response.data;
}

export const getUser = async (id: string) => {
  const response = await axios.get(`/users/${id}`);
  return response.data;
};

export const getUserStats = async () => {
  const response = await axios.get('/users/stats');
  return response.data.data; // adjust if your API wraps data differently
};


