import { Link, createFileRoute, useRouter  } from '@tanstack/react-router'
import { z } from 'zod'
import { Toaster, toast } from 'sonner'
import { useForm } from '@tanstack/react-form'
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useLogin } from '@/api/loginapi'
import useAuthStore from '@/store/authStore'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
})
const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
})
export type FormData = z.infer<typeof loginSchema>

const validateField = <T,>(value: T, schema: z.ZodType<T>) => {
  const result = schema.safeParse(value)
  if (!result.success) {
    return result.error.issues[0]?.message || 'Validation error'
  }
  return undefined
}

function RouteComponent() {
  const login = useLogin()
  const router = useRouter()

  const form = useForm({
    defaultValues: { email: '', password: '' } as FormData,
    
    onSubmit: async ({ value }) => {
      const result = loginSchema.safeParse(value)
      
      if (!result.success) {
        console.error('Validation failed:', result.error.issues)
        return
      }

      console.log('Attempting login with:', {
        email: result.data.email,
        password: '[HIDDEN]',
      })
      try {
        const res = await login.mutateAsync(result.data)
        toast.success('Login successful!')
        console.log('Login response:', res)
        const userRole = res.user?.role

        // Store auth data in the store
        if (res.accessToken && res.refreshToken && res.user) {
          useAuthStore.getState().login(
            {
              accessToken: res.accessToken,
              refreshToken: res.refreshToken,
            },
            {
              user_id: res.user.id.toString(),
              email: res.user.email,
              role: res.user.role,
              firstName: res.user.firstName,
              lastName: res.user.lastName,
            }
          )
        }

        // Route based on user role
        switch (userRole) {
          case 'admin':
            router.navigate({ to: '/admin' })
            break
          case 'doctor':
            router.navigate({ to: '/doctors' })
            break
          case 'patient':
            router.navigate({ to: '/patients' })
            break
          case 'pharmacist':
            router.navigate({ to: '/pharmacist' })
            break
          default:
            console.warn('Unknown user role:', userRole)
            toast.error('User role not found. Please contact support.')
            router.navigate({ to: '/' })
        }
      } catch (error) {
        let errorMessage = 'Login failed. Please try again.'

        if (error instanceof Error) {
          errorMessage = error.message
        }
        if (
          errorMessage.toLowerCase().includes('not found') ||
          errorMessage.toLowerCase().includes('no account found')
        ) {
          toast.error(
            'Account not found. Please check your email or create a new account.',
          )
        } else if (
          errorMessage.toLowerCase().includes('invalid') ||
          errorMessage.toLowerCase().includes('password')
        ) {
          toast.error(
            'Invalid credentials. Please check your email and password.',
          )
        } else if (
          errorMessage.toLowerCase().includes('network') ||
          errorMessage.toLowerCase().includes('fetch')
        ) {
          toast.error(
            'Network error. Please check your internet connection and try again.',
          )
        } else {
          toast.error(errorMessage)
        }
      }

      console.log('Form submitted successfully:', value)
    },

    
  })
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Toaster/>
        <Card className="w-full max-w-md shadow-md border border-gray-200 rounded-xl bg-white">
          <CardHeader className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="bg-violet-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-violet-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c.943 0 1.815-.613 2-1.529V8.471C13.815 7.557 12.943 7 12 7s-1.815.557-2 1.471v1C10.185 10.387 11.057 11 12 11z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11v3m0 0H9m3 0h3"
                  />
                </svg>
              </div>
            </div>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Welcome User
            </CardTitle>
            <CardDescription className="text-sm text-gray-500">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              form.handleSubmit()
            }}
          >
            <CardContent>
              <div className="flex flex-col gap-8">
                <form.Field
                  name="email"
                  validators={{
                    onChange: ({ value }) =>
                      validateField(value, loginSchema.shape.email),
                    onBlur: ({ value }) =>
                      validateField(value, loginSchema.shape.email),
                  }}
                  children={(field) => (
                    <div className="grid gap-2">
                      <Label
                        htmlFor="email"
                        className="font-medium text-gray-700"
                      >
                        Email
                      </Label>
                      <Input
                        type="email"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="name@mail.com"
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                      {field.state.meta.errors.length > 0 && (
                        <p className="mt-1 text-sm text-red-600">
                          {String(field.state.meta.errors[0])}
                        </p>
                      )}
                    </div>
                  )}
                />
                <form.Field
                  name="password"
                  validators={{
                    onChange: ({ value }) =>
                      validateField(value, loginSchema.shape.password),
                    onBlur: ({ value }) =>
                      validateField(value, loginSchema.shape.password),
                  }}
                  children={(field) => (
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="password"
                          className="font-medium text-gray-700"
                        >
                          Password
                        </Label>
                        <a
                          href="#"
                          className="text-sm text-blue-600 hover:underline hover:text-blue-800"
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        placeholder="Enter your password"
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                      {field.state.meta.errors.length > 0 && (
                        <p className="mt-1 text-sm text-red-600">
                          {String(field.state.meta.errors[0])}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                  <Button
                    type="submit"
                    className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    disabled={!canSubmit}
                  >
                    {isSubmitting ? 'Logging in...' : 'Login'}
                  </Button>
                )}
              />
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Login with Google
              </Button>
            </CardFooter>
          </form>
          <div className="text-center text-sm mt-4 text-gray-600">
            Don't have an account?{' '}
            <Link to="/auth/register" className="text-violet-600 hover:underline">
              Sign up for free
            </Link>
            <p className="mt-2 text-xs text-gray-400">
              By signing in, you agree to our{' '}
              <a href="#" className="underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </Card>
    </div>
  )
}





















// // src/routes/auth/register.tsx

// import { createFileRoute, useRouter } from '@tanstack/react-router'
// import { useState } from 'react'
// import { UserPlusIcon, Loader2Icon } from 'lucide-react'

// export const Route = createFileRoute('/auth/register')({
//   component: RegisterPage,
// })

// function RegisterPage() {
//   const router = useRouter()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [role, setRole] = useState('patient')
//   const [isLoading, setIsLoading] = useState(false)

//   const handleRegister = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)

//     try {
//       // Call your register API here
//       console.log('Registering user', { email, firstName, lastName, role })

//       // Simulate success
//       router.navigate({ to: '/auth/login' })
//     } catch (err) {
//       console.error('Register error:', err)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleRegister}
//         className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
//       >
//         <h2 className="text-2xl font-bold text-center">Create Your Account</h2>

//         <input
//           type="text"
//           placeholder="First Name"
//           className="w-full p-3 border rounded"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           className="w-full p-3 border rounded"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-3 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-3 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <select
//           className="w-full p-3 border rounded"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="patient">Patient</option>
//           <option value="doctor">Doctor</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-3 rounded flex justify-center items-center"
//           disabled={isLoading}
//         >
//           {isLoading ? <Loader2Icon className="animate-spin mr-2" /> : <UserPlusIcon className="mr-2" />}
//           {isLoading ? 'Registering...' : 'Register'}
//         </button>
//       </form>
//     </div>
//   )
// }
