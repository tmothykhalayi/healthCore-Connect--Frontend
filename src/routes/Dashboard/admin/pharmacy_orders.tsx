import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Dashboard/admin/pharmacy_orders')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/admin/pharmacy_order"!</div>
}
