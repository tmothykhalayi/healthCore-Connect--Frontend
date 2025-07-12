import { useGetPayments } from '@/hooks/paymentHook';
import { useGetAppointments } from '@/hooks/appointmentHook';
import { useGetOrders } from '@/hooks/orderHook';
import { useGetPrescriptions } from '@/hooks/medicalrecords';
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';
import { useMemo, useEffect } from 'react';
import { 
  CreditCard, 
  Calendar, 
  ShoppingCart, 
  Pill, 
  DollarSign, 
  Users, 
  TrendingUp,
  Activity
} from 'lucide-react';

export default function AdminDashboard() {
  // Payments
  const { data: paymentsData, isLoading: paymentsLoading, error: paymentsError } = useGetPayments();
  // Appointments
  const { data: appointmentsData, isLoading: appointmentsLoading, error: appointmentsError } = useGetAppointments();
  // Orders
  const { data: ordersData, isLoading: ordersLoading, error: ordersError } = useGetOrders();
  // Prescriptions
  const { data: prescriptionsData, isLoading: prescriptionsLoading, error: prescriptionsError } = useGetPrescriptions() as any;

  // Debug logging
  useEffect(() => {
    console.log('Payments Data:', paymentsData);
    console.log('Payments Error:', paymentsError);
    console.log('Appointments Data:', appointmentsData);
    console.log('Appointments Error:', appointmentsError);
    console.log('Orders Data:', ordersData);
    console.log('Orders Error:', ordersError);
    console.log('Prescriptions Data:', prescriptionsData);
    console.log('Prescriptions Error:', prescriptionsError);
  }, [paymentsData, paymentsError, appointmentsData, appointmentsError, ordersData, ordersError, prescriptionsData, prescriptionsError]);

  // Calculate statistics
  const stats = useMemo(() => {
    const payments = Array.isArray(paymentsData) ? paymentsData : (paymentsData as any)?.data || [];
    const appointments = Array.isArray(appointmentsData) ? appointmentsData : (appointmentsData as any)?.data || [];
    const orders = Array.isArray(ordersData) ? ordersData : (ordersData as any)?.data || [];
    const prescriptions = Array.isArray(prescriptionsData) ? prescriptionsData : (prescriptionsData as any) || [];

    const totalPayments = payments.length;
    const totalRevenue = payments.reduce((sum: number, payment: any) => sum + (payment.amount || 0), 0);
    const totalAppointments = appointments.length;
    const totalOrders = orders.length;
    const totalPrescriptions = prescriptions.length;

    return {
      totalPayments,
      totalRevenue,
      totalAppointments,
      totalOrders,
      totalPrescriptions
    };
  }, [paymentsData, appointmentsData, ordersData, prescriptionsData]);

  // Format date helper
  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Format currency helper
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount || 0);
  };

  // Statistics Cards
  const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${color}`}>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Icon className="h-8 w-8 text-gray-400" />
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="text-lg font-medium text-gray-900">{value}</dd>
          </dl>
        </div>
      </div>
    </div>
  );

  // Payments Table
  const payments = Array.isArray(paymentsData) ? paymentsData : (paymentsData as any)?.data || [];
  const paymentsColumns = useMemo<ColumnDef<any>[]>(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { 
        header: 'User', 
        accessorKey: 'userId',
        cell: ({ row }) => `User ${row.original.userId || 'N/A'}`
      },
      { 
        header: 'Amount', 
        accessorKey: 'amount',
        cell: ({ row }) => formatCurrency(row.original.amount)
      },
      { 
        header: 'Status', 
        accessorKey: 'status',
        cell: ({ row }) => (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            row.original.status === 'completed' ? 'bg-green-100 text-green-800' :
            row.original.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {row.original.status || 'N/A'}
          </span>
        )
      },
      { 
        header: 'Method', 
        accessorKey: 'paymentMethod' 
      },
      { 
        header: 'Created', 
        accessorKey: 'createdAt',
        cell: ({ row }) => formatDate(row.original.createdAt)
      },
    ],
    []
  );
  const paymentsTable = useReactTable({
    data: payments,
    columns: paymentsColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Appointments Table
  const appointments = Array.isArray(appointmentsData) ? appointmentsData : (appointmentsData as any)?.data || [];
  const appointmentsColumns = useMemo<ColumnDef<any>[]>(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { 
        header: 'Patient', 
        accessorKey: 'patientId',
        cell: ({ row }) => `Patient ${row.original.patientId || 'N/A'}`
      },
      { 
        header: 'Doctor', 
        accessorKey: 'doctorId',
        cell: ({ row }) => `Dr. ${row.original.doctorId || 'N/A'}`
      },
      { 
        header: 'Date', 
        accessorKey: 'appointmentDate',
        cell: ({ row }) => formatDate(row.original.appointmentDate)
      },
      { 
        header: 'Time', 
        accessorKey: 'appointmentTime' 
      },
      { 
        header: 'Status', 
        accessorKey: 'status',
        cell: ({ row }) => (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            row.original.status === 'confirmed' ? 'bg-green-100 text-green-800' :
            row.original.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
            row.original.status === 'cancelled' ? 'bg-red-100 text-red-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {row.original.status || 'N/A'}
          </span>
        )
      },
    ],
    []
  );
  const appointmentsTable = useReactTable({
    data: appointments,
    columns: appointmentsColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Orders Table
  const orders = Array.isArray(ordersData) ? ordersData : (ordersData as any)?.data || [];
  const ordersColumns = useMemo<ColumnDef<any>[]>(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { 
        header: 'Patient', 
        accessorKey: 'patientId',
        cell: ({ row }) => `Patient ${row.original.patientId || 'N/A'}`
      },
      { 
        header: 'Total', 
        accessorKey: 'totalAmount',
        cell: ({ row }) => formatCurrency(row.original.totalAmount)
      },
      { 
        header: 'Status', 
        accessorKey: 'status',
        cell: ({ row }) => (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            row.original.status === 'completed' ? 'bg-green-100 text-green-800' :
            row.original.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
            row.original.status === 'processing' ? 'bg-blue-100 text-blue-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {row.original.status || 'N/A'}
          </span>
        )
      },
      { 
        header: 'Ordered At', 
        accessorKey: 'orderedAt',
        cell: ({ row }) => formatDate(row.original.orderedAt)
      },
    ],
    []
  );
  const ordersTable = useReactTable({
    data: orders,
    columns: ordersColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Prescriptions Table
  const prescriptions = Array.isArray(prescriptionsData) ? prescriptionsData : (prescriptionsData as any) || [];
  const prescriptionsColumns = useMemo<ColumnDef<any>[]>(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { 
        header: 'Patient', 
        accessorKey: 'patientId',
        cell: ({ row }) => `Patient ${row.original.patientId || 'N/A'}`
      },
      { 
        header: 'Doctor', 
        accessorKey: 'doctor',
        cell: ({ row }) => `Dr. ${row.original.doctor || 'N/A'}`
      },
      { header: 'Medication', accessorKey: 'medication' },
      { header: 'Dosage', accessorKey: 'dosage' },
      { header: 'Quantity', accessorKey: 'quantity' },
      { 
        header: 'Date Issued', 
        accessorKey: 'dateIssued',
        cell: ({ row }) => formatDate(row.original.dateIssued)
      },
      { 
        header: 'Status', 
        accessorKey: 'status',
        cell: ({ row }) => (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            row.original.status === 'active' ? 'bg-green-100 text-green-800' :
            row.original.status === 'completed' ? 'bg-blue-100 text-blue-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {row.original.status || 'N/A'}
          </span>
        )
      },
    ],
    []
  );
  const prescriptionsTable = useReactTable({
    data: prescriptions,
    columns: prescriptionsColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-8">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={formatCurrency(stats.totalRevenue)}
          icon={DollarSign}
          color="border-green-500"
        />
        <StatCard
          title="Total Appointments"
          value={stats.totalAppointments}
          icon={Calendar}
          color="border-blue-500"
        />
        <StatCard
          title="Total Orders"
          value={stats.totalOrders}
          icon={ShoppingCart}
          color="border-purple-500"
        />
        <StatCard
          title="Total Prescriptions"
          value={stats.totalPrescriptions}
          icon={Pill}
          color="border-orange-500"
        />
      </div>

      {/* Data Tables */}
      <div className="space-y-8">
        {/* Payments Table */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Payments</h2>
          {paymentsLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-gray-600">Loading payments...</span>
            </div>
          ) : paymentsError ? (
            <div className="text-center py-8 text-red-500">
              Error loading payments: {paymentsError.message}
            </div>
          ) : payments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No payments found</div>
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
                    <tr key={row.id} className="hover:bg-gray-50">
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-gray-600">Loading appointments...</span>
            </div>
          ) : appointmentsError ? (
            <div className="text-center py-8 text-red-500">
              Error loading appointments: {appointmentsError.message}
            </div>
          ) : appointments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No appointments found</div>
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
                    <tr key={row.id} className="hover:bg-gray-50">
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-gray-600">Loading orders...</span>
            </div>
          ) : ordersError ? (
            <div className="text-center py-8 text-red-500">
              Error loading orders: {ordersError.message}
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No orders found</div>
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
                    <tr key={row.id} className="hover:bg-gray-50">
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-gray-600">Loading prescriptions...</span>
            </div>
          ) : prescriptionsError ? (
            <div className="text-center py-8 text-red-500">
              Error loading prescriptions: {prescriptionsError.message}
            </div>
          ) : prescriptions.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No prescriptions found</div>
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
                    <tr key={row.id} className="hover:bg-gray-50">
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
    </div>
  );
} 