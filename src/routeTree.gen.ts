/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as AdminRouteImport } from './routes/admin'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AdminIndexRouteImport } from './routes/admin/index'
import { Route as AuthRegisterRouteImport } from './routes/auth/register'
import { Route as AuthLoginRouteImport } from './routes/auth/login'
import { Route as DashboardUserRouteImport } from './routes/Dashboard/user'
import { Route as DashboardPatientRouteImport } from './routes/Dashboard/patient'
import { Route as DashboardDoctorsRouteImport } from './routes/Dashboard/doctors'
import { Route as DashboardAppointmentsRouteImport } from './routes/Dashboard/appointments'
import { Route as DashboardPharmarcistRecordsRouteImport } from './routes/Dashboard/pharmarcist/records'
import { Route as DashboardPharmarcistPrescriptionsRouteImport } from './routes/Dashboard/pharmarcist/prescriptions'
import { Route as DashboardPharmarcistPharmacy_ordersRouteImport } from './routes/Dashboard/pharmarcist/pharmacy_orders'
import { Route as DashboardPharmarcistPaymentsRouteImport } from './routes/Dashboard/pharmarcist/payments'
import { Route as DashboardPharmarcistPatientsRouteImport } from './routes/Dashboard/pharmarcist/patients'
import { Route as DashboardPatientsMedicinesRouteImport } from './routes/Dashboard/patients/medicines'
import { Route as DashboardPatientsDoctorsRouteImport } from './routes/Dashboard/patients/doctors'
import { Route as DashboardPatientsAppointmentsRouteImport } from './routes/Dashboard/patients/appointments'
import { Route as DashboardDoctorsPrescriptionsRouteImport } from './routes/Dashboard/doctors/prescriptions'
import { Route as DashboardDoctorsPatientsRouteImport } from './routes/Dashboard/doctors/patients'
import { Route as DashboardDoctorsAppointmentsRouteImport } from './routes/Dashboard/doctors/appointments'
import { Route as DashboardAdminUsersRouteImport } from './routes/Dashboard/admin/users'
import { Route as DashboardAdminRecordsRouteImport } from './routes/Dashboard/admin/records'
import { Route as DashboardAdminPharmacy_ordersRouteImport } from './routes/Dashboard/admin/pharmacy_orders'
import { Route as DashboardAdminPaymentsRouteImport } from './routes/Dashboard/admin/payments'
import { Route as DashboardAdminPatientsRouteImport } from './routes/Dashboard/admin/patients'
import { Route as DashboardAdminMedicinesRouteImport } from './routes/Dashboard/admin/medicines'
import { Route as DashboardAdminDoctorsRouteImport } from './routes/Dashboard/admin/doctors'
import { Route as DashboardAdminAppointmentsRouteImport } from './routes/Dashboard/admin/appointments'

const AdminRoute = AdminRouteImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const AdminIndexRoute = AdminIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AdminRoute,
} as any)
const AuthRegisterRoute = AuthRegisterRouteImport.update({
  id: '/auth/register',
  path: '/auth/register',
  getParentRoute: () => rootRouteImport,
} as any)
const AuthLoginRoute = AuthLoginRouteImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardUserRoute = DashboardUserRouteImport.update({
  id: '/Dashboard/user',
  path: '/Dashboard/user',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardPatientRoute = DashboardPatientRouteImport.update({
  id: '/Dashboard/patient',
  path: '/Dashboard/patient',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardDoctorsRoute = DashboardDoctorsRouteImport.update({
  id: '/Dashboard/doctors',
  path: '/Dashboard/doctors',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardAppointmentsRoute = DashboardAppointmentsRouteImport.update({
  id: '/Dashboard/appointments',
  path: '/Dashboard/appointments',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardPharmarcistRecordsRoute =
  DashboardPharmarcistRecordsRouteImport.update({
    id: '/Dashboard/pharmarcist/records',
    path: '/Dashboard/pharmarcist/records',
    getParentRoute: () => rootRouteImport,
  } as any)
const DashboardPharmarcistPrescriptionsRoute =
  DashboardPharmarcistPrescriptionsRouteImport.update({
    id: '/Dashboard/pharmarcist/prescriptions',
    path: '/Dashboard/pharmarcist/prescriptions',
    getParentRoute: () => rootRouteImport,
  } as any)
const DashboardPharmarcistPharmacy_ordersRoute =
  DashboardPharmarcistPharmacy_ordersRouteImport.update({
    id: '/Dashboard/pharmarcist/pharmacy_orders',
    path: '/Dashboard/pharmarcist/pharmacy_orders',
    getParentRoute: () => rootRouteImport,
  } as any)
const DashboardPharmarcistPaymentsRoute =
  DashboardPharmarcistPaymentsRouteImport.update({
    id: '/Dashboard/pharmarcist/payments',
    path: '/Dashboard/pharmarcist/payments',
    getParentRoute: () => rootRouteImport,
  } as any)
const DashboardPharmarcistPatientsRoute =
  DashboardPharmarcistPatientsRouteImport.update({
    id: '/Dashboard/pharmarcist/patients',
    path: '/Dashboard/pharmarcist/patients',
    getParentRoute: () => rootRouteImport,
  } as any)
const DashboardPatientsMedicinesRoute =
  DashboardPatientsMedicinesRouteImport.update({
    id: '/Dashboard/patients/medicines',
    path: '/Dashboard/patients/medicines',
    getParentRoute: () => rootRouteImport,
  } as any)
const DashboardPatientsDoctorsRoute =
  DashboardPatientsDoctorsRouteImport.update({
    id: '/Dashboard/patients/doctors',
    path: '/Dashboard/patients/doctors',
    getParentRoute: () => rootRouteImport,
  } as any)
const DashboardPatientsAppointmentsRoute =
  DashboardPatientsAppointmentsRouteImport.update({
    id: '/Dashboard/patients/appointments',
    path: '/Dashboard/patients/appointments',
    getParentRoute: () => rootRouteImport,
  } as any)
const DashboardDoctorsPrescriptionsRoute =
  DashboardDoctorsPrescriptionsRouteImport.update({
    id: '/prescriptions',
    path: '/prescriptions',
    getParentRoute: () => DashboardDoctorsRoute,
  } as any)
const DashboardDoctorsPatientsRoute =
  DashboardDoctorsPatientsRouteImport.update({
    id: '/patients',
    path: '/patients',
    getParentRoute: () => DashboardDoctorsRoute,
  } as any)
const DashboardDoctorsAppointmentsRoute =
  DashboardDoctorsAppointmentsRouteImport.update({
    id: '/appointments',
    path: '/appointments',
    getParentRoute: () => DashboardDoctorsRoute,
  } as any)
const DashboardAdminUsersRoute = DashboardAdminUsersRouteImport.update({
  id: '/Dashboard/admin/users',
  path: '/Dashboard/admin/users',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardAdminRecordsRoute = DashboardAdminRecordsRouteImport.update({
  id: '/Dashboard/admin/records',
  path: '/Dashboard/admin/records',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardAdminPharmacy_ordersRoute =
  DashboardAdminPharmacy_ordersRouteImport.update({
    id: '/Dashboard/admin/pharmacy_orders',
    path: '/Dashboard/admin/pharmacy_orders',
    getParentRoute: () => rootRouteImport,
  } as any)
const DashboardAdminPaymentsRoute = DashboardAdminPaymentsRouteImport.update({
  id: '/Dashboard/admin/payments',
  path: '/Dashboard/admin/payments',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardAdminPatientsRoute = DashboardAdminPatientsRouteImport.update({
  id: '/Dashboard/admin/patients',
  path: '/Dashboard/admin/patients',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardAdminMedicinesRoute = DashboardAdminMedicinesRouteImport.update({
  id: '/Dashboard/admin/medicines',
  path: '/Dashboard/admin/medicines',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardAdminDoctorsRoute = DashboardAdminDoctorsRouteImport.update({
  id: '/Dashboard/admin/doctors',
  path: '/Dashboard/admin/doctors',
  getParentRoute: () => rootRouteImport,
} as any)
const DashboardAdminAppointmentsRoute =
  DashboardAdminAppointmentsRouteImport.update({
    id: '/Dashboard/admin/appointments',
    path: '/Dashboard/admin/appointments',
    getParentRoute: () => rootRouteImport,
  } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/Dashboard/appointments': typeof DashboardAppointmentsRoute
  '/Dashboard/doctors': typeof DashboardDoctorsRouteWithChildren
  '/Dashboard/patient': typeof DashboardPatientRoute
  '/Dashboard/user': typeof DashboardUserRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/admin/': typeof AdminIndexRoute
  '/Dashboard/admin/appointments': typeof DashboardAdminAppointmentsRoute
  '/Dashboard/admin/doctors': typeof DashboardAdminDoctorsRoute
  '/Dashboard/admin/medicines': typeof DashboardAdminMedicinesRoute
  '/Dashboard/admin/patients': typeof DashboardAdminPatientsRoute
  '/Dashboard/admin/payments': typeof DashboardAdminPaymentsRoute
  '/Dashboard/admin/pharmacy_orders': typeof DashboardAdminPharmacy_ordersRoute
  '/Dashboard/admin/records': typeof DashboardAdminRecordsRoute
  '/Dashboard/admin/users': typeof DashboardAdminUsersRoute
  '/Dashboard/doctors/appointments': typeof DashboardDoctorsAppointmentsRoute
  '/Dashboard/doctors/patients': typeof DashboardDoctorsPatientsRoute
  '/Dashboard/doctors/prescriptions': typeof DashboardDoctorsPrescriptionsRoute
  '/Dashboard/patients/appointments': typeof DashboardPatientsAppointmentsRoute
  '/Dashboard/patients/doctors': typeof DashboardPatientsDoctorsRoute
  '/Dashboard/patients/medicines': typeof DashboardPatientsMedicinesRoute
  '/Dashboard/pharmarcist/patients': typeof DashboardPharmarcistPatientsRoute
  '/Dashboard/pharmarcist/payments': typeof DashboardPharmarcistPaymentsRoute
  '/Dashboard/pharmarcist/pharmacy_orders': typeof DashboardPharmarcistPharmacy_ordersRoute
  '/Dashboard/pharmarcist/prescriptions': typeof DashboardPharmarcistPrescriptionsRoute
  '/Dashboard/pharmarcist/records': typeof DashboardPharmarcistRecordsRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/Dashboard/appointments': typeof DashboardAppointmentsRoute
  '/Dashboard/doctors': typeof DashboardDoctorsRouteWithChildren
  '/Dashboard/patient': typeof DashboardPatientRoute
  '/Dashboard/user': typeof DashboardUserRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/admin': typeof AdminIndexRoute
  '/Dashboard/admin/appointments': typeof DashboardAdminAppointmentsRoute
  '/Dashboard/admin/doctors': typeof DashboardAdminDoctorsRoute
  '/Dashboard/admin/medicines': typeof DashboardAdminMedicinesRoute
  '/Dashboard/admin/patients': typeof DashboardAdminPatientsRoute
  '/Dashboard/admin/payments': typeof DashboardAdminPaymentsRoute
  '/Dashboard/admin/pharmacy_orders': typeof DashboardAdminPharmacy_ordersRoute
  '/Dashboard/admin/records': typeof DashboardAdminRecordsRoute
  '/Dashboard/admin/users': typeof DashboardAdminUsersRoute
  '/Dashboard/doctors/appointments': typeof DashboardDoctorsAppointmentsRoute
  '/Dashboard/doctors/patients': typeof DashboardDoctorsPatientsRoute
  '/Dashboard/doctors/prescriptions': typeof DashboardDoctorsPrescriptionsRoute
  '/Dashboard/patients/appointments': typeof DashboardPatientsAppointmentsRoute
  '/Dashboard/patients/doctors': typeof DashboardPatientsDoctorsRoute
  '/Dashboard/patients/medicines': typeof DashboardPatientsMedicinesRoute
  '/Dashboard/pharmarcist/patients': typeof DashboardPharmarcistPatientsRoute
  '/Dashboard/pharmarcist/payments': typeof DashboardPharmarcistPaymentsRoute
  '/Dashboard/pharmarcist/pharmacy_orders': typeof DashboardPharmarcistPharmacy_ordersRoute
  '/Dashboard/pharmarcist/prescriptions': typeof DashboardPharmarcistPrescriptionsRoute
  '/Dashboard/pharmarcist/records': typeof DashboardPharmarcistRecordsRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/admin': typeof AdminRouteWithChildren
  '/Dashboard/appointments': typeof DashboardAppointmentsRoute
  '/Dashboard/doctors': typeof DashboardDoctorsRouteWithChildren
  '/Dashboard/patient': typeof DashboardPatientRoute
  '/Dashboard/user': typeof DashboardUserRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/admin/': typeof AdminIndexRoute
  '/Dashboard/admin/appointments': typeof DashboardAdminAppointmentsRoute
  '/Dashboard/admin/doctors': typeof DashboardAdminDoctorsRoute
  '/Dashboard/admin/medicines': typeof DashboardAdminMedicinesRoute
  '/Dashboard/admin/patients': typeof DashboardAdminPatientsRoute
  '/Dashboard/admin/payments': typeof DashboardAdminPaymentsRoute
  '/Dashboard/admin/pharmacy_orders': typeof DashboardAdminPharmacy_ordersRoute
  '/Dashboard/admin/records': typeof DashboardAdminRecordsRoute
  '/Dashboard/admin/users': typeof DashboardAdminUsersRoute
  '/Dashboard/doctors/appointments': typeof DashboardDoctorsAppointmentsRoute
  '/Dashboard/doctors/patients': typeof DashboardDoctorsPatientsRoute
  '/Dashboard/doctors/prescriptions': typeof DashboardDoctorsPrescriptionsRoute
  '/Dashboard/patients/appointments': typeof DashboardPatientsAppointmentsRoute
  '/Dashboard/patients/doctors': typeof DashboardPatientsDoctorsRoute
  '/Dashboard/patients/medicines': typeof DashboardPatientsMedicinesRoute
  '/Dashboard/pharmarcist/patients': typeof DashboardPharmarcistPatientsRoute
  '/Dashboard/pharmarcist/payments': typeof DashboardPharmarcistPaymentsRoute
  '/Dashboard/pharmarcist/pharmacy_orders': typeof DashboardPharmarcistPharmacy_ordersRoute
  '/Dashboard/pharmarcist/prescriptions': typeof DashboardPharmarcistPrescriptionsRoute
  '/Dashboard/pharmarcist/records': typeof DashboardPharmarcistRecordsRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/admin'
    | '/Dashboard/appointments'
    | '/Dashboard/doctors'
    | '/Dashboard/patient'
    | '/Dashboard/user'
    | '/auth/login'
    | '/auth/register'
    | '/admin/'
    | '/Dashboard/admin/appointments'
    | '/Dashboard/admin/doctors'
    | '/Dashboard/admin/medicines'
    | '/Dashboard/admin/patients'
    | '/Dashboard/admin/payments'
    | '/Dashboard/admin/pharmacy_orders'
    | '/Dashboard/admin/records'
    | '/Dashboard/admin/users'
    | '/Dashboard/doctors/appointments'
    | '/Dashboard/doctors/patients'
    | '/Dashboard/doctors/prescriptions'
    | '/Dashboard/patients/appointments'
    | '/Dashboard/patients/doctors'
    | '/Dashboard/patients/medicines'
    | '/Dashboard/pharmarcist/patients'
    | '/Dashboard/pharmarcist/payments'
    | '/Dashboard/pharmarcist/pharmacy_orders'
    | '/Dashboard/pharmarcist/prescriptions'
    | '/Dashboard/pharmarcist/records'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/Dashboard/appointments'
    | '/Dashboard/doctors'
    | '/Dashboard/patient'
    | '/Dashboard/user'
    | '/auth/login'
    | '/auth/register'
    | '/admin'
    | '/Dashboard/admin/appointments'
    | '/Dashboard/admin/doctors'
    | '/Dashboard/admin/medicines'
    | '/Dashboard/admin/patients'
    | '/Dashboard/admin/payments'
    | '/Dashboard/admin/pharmacy_orders'
    | '/Dashboard/admin/records'
    | '/Dashboard/admin/users'
    | '/Dashboard/doctors/appointments'
    | '/Dashboard/doctors/patients'
    | '/Dashboard/doctors/prescriptions'
    | '/Dashboard/patients/appointments'
    | '/Dashboard/patients/doctors'
    | '/Dashboard/patients/medicines'
    | '/Dashboard/pharmarcist/patients'
    | '/Dashboard/pharmarcist/payments'
    | '/Dashboard/pharmarcist/pharmacy_orders'
    | '/Dashboard/pharmarcist/prescriptions'
    | '/Dashboard/pharmarcist/records'
  id:
    | '__root__'
    | '/'
    | '/admin'
    | '/Dashboard/appointments'
    | '/Dashboard/doctors'
    | '/Dashboard/patient'
    | '/Dashboard/user'
    | '/auth/login'
    | '/auth/register'
    | '/admin/'
    | '/Dashboard/admin/appointments'
    | '/Dashboard/admin/doctors'
    | '/Dashboard/admin/medicines'
    | '/Dashboard/admin/patients'
    | '/Dashboard/admin/payments'
    | '/Dashboard/admin/pharmacy_orders'
    | '/Dashboard/admin/records'
    | '/Dashboard/admin/users'
    | '/Dashboard/doctors/appointments'
    | '/Dashboard/doctors/patients'
    | '/Dashboard/doctors/prescriptions'
    | '/Dashboard/patients/appointments'
    | '/Dashboard/patients/doctors'
    | '/Dashboard/patients/medicines'
    | '/Dashboard/pharmarcist/patients'
    | '/Dashboard/pharmarcist/payments'
    | '/Dashboard/pharmarcist/pharmacy_orders'
    | '/Dashboard/pharmarcist/prescriptions'
    | '/Dashboard/pharmarcist/records'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AdminRoute: typeof AdminRouteWithChildren
  DashboardAppointmentsRoute: typeof DashboardAppointmentsRoute
  DashboardDoctorsRoute: typeof DashboardDoctorsRouteWithChildren
  DashboardPatientRoute: typeof DashboardPatientRoute
  DashboardUserRoute: typeof DashboardUserRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AuthRegisterRoute: typeof AuthRegisterRoute
  DashboardAdminAppointmentsRoute: typeof DashboardAdminAppointmentsRoute
  DashboardAdminDoctorsRoute: typeof DashboardAdminDoctorsRoute
  DashboardAdminMedicinesRoute: typeof DashboardAdminMedicinesRoute
  DashboardAdminPatientsRoute: typeof DashboardAdminPatientsRoute
  DashboardAdminPaymentsRoute: typeof DashboardAdminPaymentsRoute
  DashboardAdminPharmacy_ordersRoute: typeof DashboardAdminPharmacy_ordersRoute
  DashboardAdminRecordsRoute: typeof DashboardAdminRecordsRoute
  DashboardAdminUsersRoute: typeof DashboardAdminUsersRoute
  DashboardPatientsAppointmentsRoute: typeof DashboardPatientsAppointmentsRoute
  DashboardPatientsDoctorsRoute: typeof DashboardPatientsDoctorsRoute
  DashboardPatientsMedicinesRoute: typeof DashboardPatientsMedicinesRoute
  DashboardPharmarcistPatientsRoute: typeof DashboardPharmarcistPatientsRoute
  DashboardPharmarcistPaymentsRoute: typeof DashboardPharmarcistPaymentsRoute
  DashboardPharmarcistPharmacy_ordersRoute: typeof DashboardPharmarcistPharmacy_ordersRoute
  DashboardPharmarcistPrescriptionsRoute: typeof DashboardPharmarcistPrescriptionsRoute
  DashboardPharmarcistRecordsRoute: typeof DashboardPharmarcistRecordsRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin/': {
      id: '/admin/'
      path: '/'
      fullPath: '/admin/'
      preLoaderRoute: typeof AdminIndexRouteImport
      parentRoute: typeof AdminRoute
    }
    '/auth/register': {
      id: '/auth/register'
      path: '/auth/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthRegisterRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/user': {
      id: '/Dashboard/user'
      path: '/Dashboard/user'
      fullPath: '/Dashboard/user'
      preLoaderRoute: typeof DashboardUserRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/patient': {
      id: '/Dashboard/patient'
      path: '/Dashboard/patient'
      fullPath: '/Dashboard/patient'
      preLoaderRoute: typeof DashboardPatientRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/doctors': {
      id: '/Dashboard/doctors'
      path: '/Dashboard/doctors'
      fullPath: '/Dashboard/doctors'
      preLoaderRoute: typeof DashboardDoctorsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/appointments': {
      id: '/Dashboard/appointments'
      path: '/Dashboard/appointments'
      fullPath: '/Dashboard/appointments'
      preLoaderRoute: typeof DashboardAppointmentsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/pharmarcist/records': {
      id: '/Dashboard/pharmarcist/records'
      path: '/Dashboard/pharmarcist/records'
      fullPath: '/Dashboard/pharmarcist/records'
      preLoaderRoute: typeof DashboardPharmarcistRecordsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/pharmarcist/prescriptions': {
      id: '/Dashboard/pharmarcist/prescriptions'
      path: '/Dashboard/pharmarcist/prescriptions'
      fullPath: '/Dashboard/pharmarcist/prescriptions'
      preLoaderRoute: typeof DashboardPharmarcistPrescriptionsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/pharmarcist/pharmacy_orders': {
      id: '/Dashboard/pharmarcist/pharmacy_orders'
      path: '/Dashboard/pharmarcist/pharmacy_orders'
      fullPath: '/Dashboard/pharmarcist/pharmacy_orders'
      preLoaderRoute: typeof DashboardPharmarcistPharmacy_ordersRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/pharmarcist/payments': {
      id: '/Dashboard/pharmarcist/payments'
      path: '/Dashboard/pharmarcist/payments'
      fullPath: '/Dashboard/pharmarcist/payments'
      preLoaderRoute: typeof DashboardPharmarcistPaymentsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/pharmarcist/patients': {
      id: '/Dashboard/pharmarcist/patients'
      path: '/Dashboard/pharmarcist/patients'
      fullPath: '/Dashboard/pharmarcist/patients'
      preLoaderRoute: typeof DashboardPharmarcistPatientsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/patients/medicines': {
      id: '/Dashboard/patients/medicines'
      path: '/Dashboard/patients/medicines'
      fullPath: '/Dashboard/patients/medicines'
      preLoaderRoute: typeof DashboardPatientsMedicinesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/patients/doctors': {
      id: '/Dashboard/patients/doctors'
      path: '/Dashboard/patients/doctors'
      fullPath: '/Dashboard/patients/doctors'
      preLoaderRoute: typeof DashboardPatientsDoctorsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/patients/appointments': {
      id: '/Dashboard/patients/appointments'
      path: '/Dashboard/patients/appointments'
      fullPath: '/Dashboard/patients/appointments'
      preLoaderRoute: typeof DashboardPatientsAppointmentsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/doctors/prescriptions': {
      id: '/Dashboard/doctors/prescriptions'
      path: '/prescriptions'
      fullPath: '/Dashboard/doctors/prescriptions'
      preLoaderRoute: typeof DashboardDoctorsPrescriptionsRouteImport
      parentRoute: typeof DashboardDoctorsRoute
    }
    '/Dashboard/doctors/patients': {
      id: '/Dashboard/doctors/patients'
      path: '/patients'
      fullPath: '/Dashboard/doctors/patients'
      preLoaderRoute: typeof DashboardDoctorsPatientsRouteImport
      parentRoute: typeof DashboardDoctorsRoute
    }
    '/Dashboard/doctors/appointments': {
      id: '/Dashboard/doctors/appointments'
      path: '/appointments'
      fullPath: '/Dashboard/doctors/appointments'
      preLoaderRoute: typeof DashboardDoctorsAppointmentsRouteImport
      parentRoute: typeof DashboardDoctorsRoute
    }
    '/Dashboard/admin/users': {
      id: '/Dashboard/admin/users'
      path: '/Dashboard/admin/users'
      fullPath: '/Dashboard/admin/users'
      preLoaderRoute: typeof DashboardAdminUsersRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/admin/records': {
      id: '/Dashboard/admin/records'
      path: '/Dashboard/admin/records'
      fullPath: '/Dashboard/admin/records'
      preLoaderRoute: typeof DashboardAdminRecordsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/admin/pharmacy_orders': {
      id: '/Dashboard/admin/pharmacy_orders'
      path: '/Dashboard/admin/pharmacy_orders'
      fullPath: '/Dashboard/admin/pharmacy_orders'
      preLoaderRoute: typeof DashboardAdminPharmacy_ordersRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/admin/payments': {
      id: '/Dashboard/admin/payments'
      path: '/Dashboard/admin/payments'
      fullPath: '/Dashboard/admin/payments'
      preLoaderRoute: typeof DashboardAdminPaymentsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/admin/patients': {
      id: '/Dashboard/admin/patients'
      path: '/Dashboard/admin/patients'
      fullPath: '/Dashboard/admin/patients'
      preLoaderRoute: typeof DashboardAdminPatientsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/admin/medicines': {
      id: '/Dashboard/admin/medicines'
      path: '/Dashboard/admin/medicines'
      fullPath: '/Dashboard/admin/medicines'
      preLoaderRoute: typeof DashboardAdminMedicinesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/admin/doctors': {
      id: '/Dashboard/admin/doctors'
      path: '/Dashboard/admin/doctors'
      fullPath: '/Dashboard/admin/doctors'
      preLoaderRoute: typeof DashboardAdminDoctorsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/Dashboard/admin/appointments': {
      id: '/Dashboard/admin/appointments'
      path: '/Dashboard/admin/appointments'
      fullPath: '/Dashboard/admin/appointments'
      preLoaderRoute: typeof DashboardAdminAppointmentsRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

interface AdminRouteChildren {
  AdminIndexRoute: typeof AdminIndexRoute
}

const AdminRouteChildren: AdminRouteChildren = {
  AdminIndexRoute: AdminIndexRoute,
}

const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren)

interface DashboardDoctorsRouteChildren {
  DashboardDoctorsAppointmentsRoute: typeof DashboardDoctorsAppointmentsRoute
  DashboardDoctorsPatientsRoute: typeof DashboardDoctorsPatientsRoute
  DashboardDoctorsPrescriptionsRoute: typeof DashboardDoctorsPrescriptionsRoute
}

const DashboardDoctorsRouteChildren: DashboardDoctorsRouteChildren = {
  DashboardDoctorsAppointmentsRoute: DashboardDoctorsAppointmentsRoute,
  DashboardDoctorsPatientsRoute: DashboardDoctorsPatientsRoute,
  DashboardDoctorsPrescriptionsRoute: DashboardDoctorsPrescriptionsRoute,
}

const DashboardDoctorsRouteWithChildren =
  DashboardDoctorsRoute._addFileChildren(DashboardDoctorsRouteChildren)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AdminRoute: AdminRouteWithChildren,
  DashboardAppointmentsRoute: DashboardAppointmentsRoute,
  DashboardDoctorsRoute: DashboardDoctorsRouteWithChildren,
  DashboardPatientRoute: DashboardPatientRoute,
  DashboardUserRoute: DashboardUserRoute,
  AuthLoginRoute: AuthLoginRoute,
  AuthRegisterRoute: AuthRegisterRoute,
  DashboardAdminAppointmentsRoute: DashboardAdminAppointmentsRoute,
  DashboardAdminDoctorsRoute: DashboardAdminDoctorsRoute,
  DashboardAdminMedicinesRoute: DashboardAdminMedicinesRoute,
  DashboardAdminPatientsRoute: DashboardAdminPatientsRoute,
  DashboardAdminPaymentsRoute: DashboardAdminPaymentsRoute,
  DashboardAdminPharmacy_ordersRoute: DashboardAdminPharmacy_ordersRoute,
  DashboardAdminRecordsRoute: DashboardAdminRecordsRoute,
  DashboardAdminUsersRoute: DashboardAdminUsersRoute,
  DashboardPatientsAppointmentsRoute: DashboardPatientsAppointmentsRoute,
  DashboardPatientsDoctorsRoute: DashboardPatientsDoctorsRoute,
  DashboardPatientsMedicinesRoute: DashboardPatientsMedicinesRoute,
  DashboardPharmarcistPatientsRoute: DashboardPharmarcistPatientsRoute,
  DashboardPharmarcistPaymentsRoute: DashboardPharmarcistPaymentsRoute,
  DashboardPharmarcistPharmacy_ordersRoute:
    DashboardPharmarcistPharmacy_ordersRoute,
  DashboardPharmarcistPrescriptionsRoute:
    DashboardPharmarcistPrescriptionsRoute,
  DashboardPharmarcistRecordsRoute: DashboardPharmarcistRecordsRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
