
import axios from '../lib/axios';
import type  { CreatepaymentsDto,  UpdatepaymentsDto } from '../Types/interface';

// Get all payments
export const getPayments = async () => {
  const response = await axios.get('/payments');
  return response.data;
};

//create a new payment 
export const  createPayment = async (data: CreatepaymentsDto) => {
  const response = await axios.post('/payments', data);
  return response.data;
}

//update payment
export const updatePayment = async (id: string, data: UpdatepaymentsDto) => {
  const response = await axios.put(`/payments/${id}`, data);
  return response.data;
};

//delete payment
export const deletePayment = async (id: string) => {
  const response = await axios.delete(`/payments/${id}`);
  return response.data;
};



