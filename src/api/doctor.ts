
import type { CreateDoctorDto, UpdateDoctorDto } from '../Types/interface'
import api from '../lib/axios'

export const getDoctors = async () => {
  const response = await api.get('/doctors?limit=20&page=1')
  return response.data
}
// Get a specific doctor by ID
export const getDoctor = async (doctorId: number) => {
  const response = await api.get(`/doctors/${doctorId}`)
  return response.data
}
// Create a new doctor
export const createDoctor = async (data:CreateDoctorDto) => {
  const response = await api.post('/doctors', data)
  return response.data
}

export const deleteDoctor = async (doctorId: number) => {
  const response = await api.delete(`/doctors/${doctorId}`)
  return response.data
}

// Update a doctor's information
export const updateDoctor = async (doctorId: number, data:UpdateDoctorDto) => {
  const response = await api.patch(`/doctors/${doctorId}`, data)
  return response.data
}
