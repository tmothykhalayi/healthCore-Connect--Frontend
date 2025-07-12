import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getOrders, createOrder, updateOrder, deleteOrder } from '@/api/orders';
import type { CreateOrdersDto, UpdateOrdersDto } from '@/Types/interface';

export function useGetOrders() {
  return useQuery({ queryKey: ['orders'], queryFn: getOrders });
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateOrdersDto) => createOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
}

export function useUpdateOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateOrdersDto }) => updateOrder(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
}

export function useDeleteOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteOrder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
} 