import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Dashboard/admin/records')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/admin/records"!</div>
}
