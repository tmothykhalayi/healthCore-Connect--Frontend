import { useQuery } from '@tanstack/react-query';
import { getPrescriptions } from '@/api/medicalrecords';

export const useGetPrescriptions = (doctorId?: string) =>
  useQuery({
    queryKey: ['prescriptions', doctorId],
    queryFn: () => getPrescriptions(doctorId),
  }); 