import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Dashboard/doctors/patients')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/doctors/patients"!</div>
}
