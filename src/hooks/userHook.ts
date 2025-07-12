import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUsers, getUser, createUser, updateUser, deleteUser } from '@/api/user';
import type { CreateUserDto, UpdateUserDto } from '@/Types/interface';

export function useGetUsers() {
  return useQuery({ queryKey: ['users'], queryFn: getUsers });
}

export function useGetUser(userId: string) {
  return useQuery({ queryKey: ['user', userId], queryFn: () => getUser(userId), enabled: !!userId });
}

export function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateUserDto) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserDto }) => updateUser(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
