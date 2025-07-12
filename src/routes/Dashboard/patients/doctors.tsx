import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Dashboard/patients/doctors')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/patients/doctors"!</div>
}
