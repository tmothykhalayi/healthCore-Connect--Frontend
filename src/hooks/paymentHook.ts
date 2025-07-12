import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPayments, createPayment, updatePayment, deletePayment } from '@/api/payments';
import type { CreatepaymentsDto, UpdatepaymentsDto } from '@/Types/interface';

export function useGetPayments() {
  return useQuery({ queryKey: ['payments'], queryFn: getPayments });
}

export function useCreatePayment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreatepaymentsDto) => createPayment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
  });
}

export function useUpdatePayment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdatepaymentsDto }) => updatePayment(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
  });
}

export function useDeletePayment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deletePayment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
  });
} 