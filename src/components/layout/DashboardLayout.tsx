import { Outlet, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { 
  Users, 
  Calendar, 
  Stethoscope, 
  Pill, 
  CreditCard, 
  ShoppingCart, 
  FileText,
  User,
  LogOut,
  Menu,
  X
} from 'lucide-react'

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: User, current: true },
    { name: 'Users', href: '/admin/users', icon: Users, current: false },
    { name: 'Appointments', href: '/admin/appointments', icon: Calendar, current: false },
    { name: 'Doctors', href: '/admin/doctors', icon: Stethoscope, current: false },
    { name: 'Pharmacists', href: '/admin/pharmacists', icon: User, current: false },
    { name: 'Pharmacy', href: '/admin/pharmacy', icon: ShoppingCart, current: false },
    { name: 'Medicines', href: '/admin/medicines', icon: Pill, current: false },
    { name: 'Payments', href: '/admin/payments', icon: CreditCard, current: false },
    { name: 'Pharmacy Orders', href: '/admin/pharmacy-orders', icon: ShoppingCart, current: false },
    { name: 'Medical Records', href: '/admin/records', icon: FileText, current: false },
  ]

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-blue-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white">
          <div className="flex h-16 items-center justify-between px-4">
            <h1 className="text-xl font-bold text-gray-900">HealthCore Admin</h1>
            <button onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  item.current
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="border-t border-gray-200 p-4">
            <button className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-blue-950 border-r border-gray-200">
          <div className="flex h-16 items-center px-4">
            <h1 className="text-xl font-bold text-gray-900">HealthCore Admin</h1>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  item.current
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-white hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="border-t border-gray-200 p-4">
            <button className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1"></div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <span className="text-sm text-gray-500">Admin Panel</span>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout 