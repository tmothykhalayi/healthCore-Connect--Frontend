import { createFileRoute } from '@tanstack/react-router'
import DashboardLayout from '../components/layout/DashboardLayout'
import useAuthStore from '../store/authStore'
import { useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  component: AdminLayout,
})

function AdminLayout() {
  const user = useAuthStore(state => state.user)
  const router = useRouter()

  // Protect the admin layout: Only allow admins
  if (!user || user.role !== 'admin') {
    router.navigate({ to: '/' })
    return null
  }

  return <DashboardLayout />
} 