import { createFileRoute } from '@tanstack/react-router'
import AdminDashboard from '../../components/pages/AdminDashboard'

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
}) 