import axios from '../lib/axios';
import  type {CreateOrdersDto ,UpdateOrdersDto } from '../Types/interface';


//fetch all orders
export const getOrders = async () => {
  try {
    const response = await axios.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
}

//create a new order
export const createOrder = async (data:CreateOrdersDto) => {
  try {
    const response = await axios.post('/orders', data);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

//update an order
export const updateOrder = async (id: string, data: UpdateOrdersDto) => {
  try {
    const response = await axios.put(`/orders/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
}

//delete an order
export const deleteOrder = async (id: string) => {
  try {
    const response = await axios.delete(`/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error;
  }
}