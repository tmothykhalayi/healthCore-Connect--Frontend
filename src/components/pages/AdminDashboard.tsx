import { useGetPayments } from '@/hooks/paymentHook';
import { useGetAppointments } from '@/hooks/appointmentHook';
import { useGetOrders } from '@/hooks/orderHook';
import { useGetPrescriptions } from '@/hooks/medicalrecords';
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

export default function AdminDashboard() {
  // Payments
  const { data: paymentsData, isLoading: paymentsLoading } = useGetPayments();
  // Appointments
  const { data: appointmentsData, isLoading: appointmentsLoading } = useGetAppointments();
  // Orders
  const { data: ordersData, isLoading: ordersLoading } = useGetOrders();
  // Prescriptions
  const { data: prescriptionsData, isLoading: prescriptionsLoading } = useGetPrescriptions() as any;

  // Payments Table
  const payments = Array.isArray(paymentsData) ? paymentsData : paymentsData?.data || [];
  const paymentsColumns = useMemo<ColumnDef<any>[]>(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { header: 'User', accessorKey: 'userId' },
      { header: 'Amount', accessorKey: 'amount' },
      { header: 'Status', accessorKey: 'status' },
      { header: 'Method', accessorKey: 'paymentMethod' },
      { header: 'Created', accessorKey: 'createdAt' },
    ],
    []
  );
  const paymentsTable = useReactTable({
    data: payments,
    columns: paymentsColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Appointments Table
  const appointments = Array.isArray(appointmentsData) ? appointmentsData : appointmentsData?.data || [];
  const appointmentsColumns = useMemo<ColumnDef<any>[]>(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { header: 'Patient', accessorKey: 'patientId' },
      { header: 'Doctor', accessorKey: 'doctorId' },
      { header: 'Date', accessorKey: 'appointmentDate' },
      { header: 'Time', accessorKey: 'appointmentTime' },
      { header: 'Status', accessorKey: 'status' },
    ],
    []
  );
  const appointmentsTable = useReactTable({
    data: appointments,
    columns: appointmentsColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Orders Table
  const orders = Array.isArray(ordersData) ? ordersData : ordersData?.data || [];
  const ordersColumns = useMemo<ColumnDef<any>[]>(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { header: 'Patient', accessorKey: 'patientId' },
      { header: 'Doctor', accessorKey: 'doctorId' },
      { header: 'Total', accessorKey: 'totalAmount' },
      { header: 'Status', accessorKey: 'status' },
      { header: 'Ordered At', accessorKey: 'orderedAt' },
    ],
    []
  );
  const ordersTable = useReactTable({
    data: orders,
    columns: ordersColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Prescriptions Table
  const prescriptions = Array.isArray(prescriptionsData) ? prescriptionsData : prescriptionsData || [];
  const prescriptionsColumns = useMemo<ColumnDef<any>[]>(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { header: 'Patient', accessorKey: 'patientId' },
      { header: 'Doctor', accessorKey: 'doctor' },
      { header: 'Medication', accessorKey: 'medication' },
      { header: 'Dosage', accessorKey: 'dosage' },
      { header: 'Quantity', accessorKey: 'quantity' },
      { header: 'Date Issued', accessorKey: 'dateIssued' },
      { header: 'Status', accessorKey: 'status' },
    ],
    []
  );
  const prescriptionsTable = useReactTable({
    data: prescriptions,
    columns: prescriptionsColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-12">
      {/* Payments Table */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Payments</h2>
        {paymentsLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {paymentsTable.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paymentsTable.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      {/* Appointments Table */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Appointments</h2>
        {appointmentsLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {appointmentsTable.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {appointmentsTable.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      {/* Orders Table */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Pharmacy Orders</h2>
        {ordersLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {ordersTable.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ordersTable.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      {/* Prescriptions Table */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Prescriptions</h2>
        {prescriptionsLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {prescriptionsTable.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {prescriptionsTable.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
} 