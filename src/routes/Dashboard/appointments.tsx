import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Dashboard/appointments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Dashboard/appointment"!</div>
}
