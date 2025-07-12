import type { CreateMedicalRecordsDto ,UpdateMedicalRecordsDto} from '@/Types/interface';
import api from '../lib/axios';

//fetch medical records 
export  const  getMedicalRecords = async (patientId: string) => {
  try {
    const response = await api.get(`/medicalrecords/${patientId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching medical records:', error);
    throw error;
  }
}

//create a new medical record 
export const  createMedicalRecord = async (patientId: string, recordData: CreateMedicalRecordsDto ) => {
    try {
        const response = await api.post(`/medicalrecords/${patientId}`, recordData);
        return response.data;
    } catch (error) {
        console.error('Error creating medical record:', error);
        throw error;
    }
}

//update a medical record
export const updateMedicalRecord = async (patientId: string, recordId: string, recordData: UpdateMedicalRecordsDto) => {
    try {
        const response = await api.put(`/medicalrecords/${patientId}/${recordId}`, recordData);
        return response.data;
    } catch (error) {
        console.error('Error updating medical record:', error);
        throw error;
    }
}

//delete a medical record
export const deleteMedicalRecord = async (patientId: string, recordId: string) => {
    try {
        const response = await api.delete(`/medicalrecords/${patientId}/${recordId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting medical record:', error);
        throw error;
    }
}

// Fetch all prescription records (optionally for a doctor)
export const getPrescriptions = async (doctorId?: string) => {
  let url = '/medical-records';
  if (doctorId) {
    url += `?doctorId=${doctorId}`;
  }
  const response = await api.get(url);
  // Filter for recordType === 'prescription'
  const allRecords = response.data.data || response.data;
  return allRecords.filter((rec: any) => rec.recordType === 'prescription');
};

