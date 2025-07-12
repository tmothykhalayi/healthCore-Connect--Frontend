import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getMedicines, createMedicine, updateMedicine, deleteMedicine } from '@/api/medicine';
import type { CreateMedicineDto, UpdateMedicineDto } from '@/Types/interface';

export function useGetMedicines() {
  return useQuery({ queryKey: ['medicines'], queryFn: getMedicines });
}

export function useCreateMedicine() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateMedicineDto) => createMedicine(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['medicines'] });
    },
  });
}

export function useUpdateMedicine() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateMedicineDto }) => updateMedicine(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['medicines'] });
    },
  });
}

export function useDeleteMedicine() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteMedicine(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['medicines'] });
    },
  });
} 