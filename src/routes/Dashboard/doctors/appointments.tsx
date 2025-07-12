import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Dashboard/doctors/appointments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/doctors/appointment"!</div>
}
