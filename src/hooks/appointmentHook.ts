import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAppointments, createAppointment, updateAppointment, deleteAppointment } from "@/api/appointments";

export const useGetAppointments = () => useQuery({
  queryKey: ['appointments'],
  queryFn: getAppointments,
});

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createAppointment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['appointments'] }),
  });
};

export const useUpdateAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: number, data: any }) => updateAppointment(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['appointments'] }),
  });
};

export const useDeleteAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteAppointment,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['appointments'] }),
  });
}; 