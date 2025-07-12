// components/UsersTable.tsx
import { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
  type ColumnDef,
} from '@tanstack/react-table';
import { useGetUsers, useDeleteUser, useCreateUser, useUpdateUser } from '@/hooks/userHook';

interface TUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export const UsersTable = () => {
  const [search, setSearch] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editUser, setEditUser] = useState<TUser | null>(null);
  const [form, setForm] = useState({
    email: '',
    password: '',
    role: '',
    firstName: '',
    lastName: '',
  });

  interface UsersQueryResult {
    data: TUser[];
    statusCode: number;
    message: string;
  }

  const { data, isLoading } = useGetUsers();
  // Remove or comment out the next line in production
  console.log('my users', data);

  const deleteMutation = useDeleteUser();
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();

  const columns = useMemo<ColumnDef<TUser>[]>(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { header: 'Name',
        cell: ({ row }) => `${row.original.firstName} ${row.original.lastName}` },
      { header: 'Email', accessorKey: 'email' },
      { header: 'Role', accessorKey: 'role' },
      {
        header: 'Actions',
        cell: ({ row }) => (
          <div className="flex gap-2">
            <button
              onClick={() => {
                setEditUser(row.original);
                setForm({
                  email: row.original.email,
                  password: '',
                  role: row.original.role,
                  firstName: row.original.firstName,
                  lastName: row.original.lastName,
                });
                setShowEdit(true);
              }}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this user?')) {
                  deleteMutation.mutate(row.original.id);
                }
              }}
              className="bg-red-500 text-white px-3 py-1 rounded"
              disabled={deleteMutation.isPending}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [deleteMutation]
  );

  // Use the correct property from backend response
  const users = data?.data || [];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { globalFilter: search },
    onGlobalFilterChange: setSearch,
    manualPagination: false,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full max-w-md"
        />
        <button
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setForm({ email: '', password: '', role: '', firstName: '', lastName: '' });
            setShowCreate(true);
          }}
        >
          Add User
        </button>
      </div>
      {/* Create User Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Create User</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                createUserMutation.mutate(form, {
                  onSuccess: () => setShowCreate(false),
                });
              }}
              className="space-y-3"
            >
              <input required type="email" placeholder="Email" className="border p-2 w-full" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              <input required type="password" placeholder="Password" className="border p-2 w-full" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
              <input required type="text" placeholder="First Name" className="border p-2 w-full" value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} />
              <input required type="text" placeholder="Last Name" className="border p-2 w-full" value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} />
              <select required className="border p-2 w-full" value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))}>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
                <option value="pharmacist">Pharmacist</option>
              </select>
              <div className="flex gap-2 justify-end">
                <button type="button" className="px-4 py-2" onClick={() => setShowCreate(false)}>Cancel</button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded" disabled={createUserMutation.isPending}>Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Edit User Modal */}
      {showEdit && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                updateUserMutation.mutate({ id: editUser.id, data: form }, {
                  onSuccess: () => setShowEdit(false),
                });
              }}
              className="space-y-3"
            >
              <input required type="email" placeholder="Email" className="border p-2 w-full" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              <input type="password" placeholder="Password (leave blank to keep)" className="border p-2 w-full" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
              <input required type="text" placeholder="First Name" className="border p-2 w-full" value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} />
              <input required type="text" placeholder="Last Name" className="border p-2 w-full" value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} />
              <select required className="border p-2 w-full" value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))}>
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
                <option value="pharmacist">Pharmacist</option>
              </select>
              <div className="flex gap-2 justify-end">
                <button type="button" className="px-4 py-2" onClick={() => setShowEdit(false)}>Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={updateUserMutation.isPending}>Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
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
            {table.getRowModel().rows.map((row) => (
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
    </div>
  );
};