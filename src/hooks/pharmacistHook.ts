import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPharmacists, createPharmacist, updatePharmacist, deletePharmacist } from '@/api/pharmacist';
import type { CreatePharmacistDto, UpdatePharmacistDto } from '@/Types/interface';

export function useGetPharmacists() {
  return useQuery({ queryKey: ['pharmacists'], queryFn: getPharmacists });
}

export function useCreatePharmacist() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreatePharmacistDto) => createPharmacist(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pharmacists'] });
    },
  });
}

export function useUpdatePharmacist() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdatePharmacistDto }) => updatePharmacist(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pharmacists'] });
    },
  });
}

export function useDeletePharmacist() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deletePharmacist(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pharmacists'] });
    },
  });
} 