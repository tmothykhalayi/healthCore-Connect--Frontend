

import axios from '../lib/axios'
import type { Appointment, MedicalRecord, UserTypes } from '../Types/interface'

// Fetch patient profile by patient ID
export const getPatientProfile = async (patientId: string): Promise<UserTypes> => {
  const { data } = await axios.get<UserTypes>(`/patients/${patientId}`)
  return data
}

// Fetch appointments for a specific patient
export const getPatientAppointments = async (patientId: string): Promise<Array<Appointment>> => {
  const { data } = await axios.get<Array<Appointment>>(`/appointments/patient/${patientId}`)
  return data
}

// Fetch medical records for a patient
export const getPatientMedicalRecords = async (patientId: string): Promise<Array<MedicalRecord>> => {
  const { data } = await axios.get<Array<MedicalRecord>>(`/patients/${patientId}/medical-records`)
  return data
}
