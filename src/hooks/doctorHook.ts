import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getDoctors, getDoctor, createDoctor, updateDoctor, deleteDoctor } from '@/api/doctor';
import type { Doctor, CreateDoctorDto, UpdateDoctorDto } from '@/Types/interface';

export function useGetDoctors() {
  return useQuery({ 
    queryKey: ['doctors'], 
    queryFn: getDoctors,
    retry: 2,
    retryDelay: 1000,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}

export function useGetDoctor(doctorId: number) {
  return useQuery({ 
    queryKey: ['doctor', doctorId], 
    queryFn: () => getDoctor(doctorId), 
    enabled: !!doctorId,
    retry: 2,
    retryDelay: 1000,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}

export function useCreateDoctor() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateDoctorDto) => createDoctor(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doctors'] });
    },
  });
}

export function useUpdateDoctor() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateDoctorDto }) => updateDoctor(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doctors'] });
    },
  });
}

export function useDeleteDoctor() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteDoctor(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doctors'] });
    },
  });
} 