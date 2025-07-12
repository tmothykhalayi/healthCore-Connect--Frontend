import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Dashboard/patients/appointments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/patients/appointments"!</div>
}
