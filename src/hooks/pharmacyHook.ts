import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPharmacy, createPharmacy, updatePharmacy, deletePharmacy } from '@/api/pharmacy';
import type { pharmacyDto, UpdatePharmacyDto } from '@/Types/interface';

export function useGetPharmacies() {
  return useQuery({ queryKey: ['pharmacies'], queryFn: getPharmacy });
}

export function useCreatePharmacy() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: pharmacyDto) => createPharmacy(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pharmacies'] });
    },
  });
}

export function useUpdatePharmacy() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdatePharmacyDto }) => updatePharmacy(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pharmacies'] });
    },
  });
}

export function useDeletePharmacy() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deletePharmacy(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pharmacies'] });
    },
  });
} 