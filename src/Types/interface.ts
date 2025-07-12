export interface GenericsType {
  id: string
}

//user roles
export enum UserRole {
  DOCTOR = 'doctor',
  PATIENT = 'patient',
  PHARMACY = 'pharmacy',
  ADMIN = 'admin'
}

// Pharmacy profile
export interface PharmacyProfile extends GenericsType {
  licenseId: string
  address: string
  contactPerson: string
}

// Global data type for storing user and token information
export interface LoginResponse {
  isVerified?: boolean
  accessToken: string
  refreshToken: string
  user?: {
    id: string
    email: string
    phone?: string
    role?: UserRole
  }
}



export interface GlobalDataType {
  isVerified?: boolean
  tokens: {
    accessToken: string
    refreshToken: string
  }
  user: {
    id: string
    email: string
    role: UserRole
  }
}

// Login-related interfaces
export interface LoginPayload {
  email: string
  phone?: string
  password: string
}


//LOGIN type
export interface login {
  email: string
  password: string
}


// Login response type
export interface loginResponse {
 token: {
   accessToken: string
   refreshToken: string
 }
 user:{
   email: string
  role: UserRole,
  user_id: string
 }
 
}
export enum Role {
  admin = 'admin',
  pharmacist = 'pharmacist',
  patient = 'patient',
  doctor = 'doctor',
}


export interface UserAuthType {
  user_id: string
  email: string
  role: Role
}

export type Tokens = {
  accessToken: string
  refreshToken: string
}
export type AuthActions = {
  login: (token: Tokens, userData: UserAuthType) => void;
  logout: () => void;
  updateAccessToken: (newAccessToken: string) => void;
  updateUser: (updatedUser: Partial<UserAuthType>) => void;
  verifyUser: () => void;
  reinitialize: () => void;
};


export interface UserAuthType {
  user_id: string
  email: string
  role: Role
}


export type AuthState = {
  tokens: Tokens | null
  user: UserAuthType | null
  isAuthenticated: boolean
}

export type AuthStoreType = AuthState & AuthActions;

//user

export interface User {
  user_id: string
  name: string
  email: string
  phone: string
  role: string
  created_at: string
}

// Order item interface
export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface CreatepaymentsDto {
  userId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer';
  transactionId?: string;
  createdAt: Date;
  updatedAt: Date;
}


export interface CreateUserDto {
  email: string
  password: string
  role: UserRole
  firstname: string
  lastname: string
  otp?: string
  secret?: string
  hashedRefreshToken?: string | null
}
export interface UpdateUserDto extends Partial<CreateUserDto> {}


// Define createOrdersDto interface for order creation
export interface createOrdersDto {
  patientId: string;
  doctorId: string;
  items: Array<OrderItem>;
  totalAmount: number;
  status?: 'pending' | 'completed' | 'cancelled';
  orderedAt?: Date;
}


export interface CreatepaymentsDto {
  userId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer';
  transactionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdatepaymentsDto extends Partial<CreatepaymentsDto> {}



export type createAdminDto = {
  // Add the properties required for creating an admin, for example:
  name: string;
  email: string;
  password: string;
};


export interface UpdateUserDto extends Partial<CreateUserDto> {}
export interface UpdateOrdersDto extends Partial<createOrdersDto> {}

// User entity for the health system
export interface UserTypes extends GenericsType {
  firstName: string
  lastName: string
  email: string
  phone: string
  password: string
  role: UserRole
  hashedRefreshToken: string
  isVerified: boolean
  provider: string
  providerId: string
  profilePicture: string
  createdAt: Date
  updatedAt: Date
  walletBalance: number
}



export interface Admin {
  id: number
  userId: number
  user: UserTypes
  adminLevel: 'admin' | 'super_admin' | 'moderator'
  status: 'active' | 'inactive' | 'suspended'
  phoneNumber: string
  department: string
  permissions: Record<string, string[]>
  lastLogin?: string
  createdAt?: string
  updatedAt?: string
}

export interface AdminStats {
  total: number
  byStatus: Record<string, number>
  byLevel: Record<string, number>
}



//doctor interface
export interface Doctor {
  id: number
  userId: number
  user: UserTypes
  licenseNumber: string
  specialization: string
  yearsOfExperience: number
  education: string
  phoneNumber: string
  officeAddress: string
  consultationFee: number
  availableDays: string[]
  availableHours: string
  bio: string
  status: 'active' | 'pending_verification' | 'inactive'
  patients?: any[]
}

export interface InventoryItem {
  id: string;
  name: string;
  currentStock: number;
  unit: string;
  reorderLevel: number;
  expiryDate: string;
}

export interface Prescription {
  id: string;
  patientName: string;
  doctor: string;
  medication: string;
  dosage: string;
  quantity: number;
  dateIssued: string;
  status: 'Pending' | 'Fulfilled' | 'Rejected';
}

export interface PatientOrder {
  id: string;
  patientName: string;
  patientEmail: string;
  orderDate: string;
  items: string[];
  status: 'Processing' | 'Pending Payment' | 'Shipped' | 'Delivered' | 'Cancelled';
  totalAmount: number;
}

export interface Message {
  id: number;
  sender: string;
  text: string;
  timestamp: string;
}

export interface Appointment {
  id: string;
  patientId: number;
  doctorId: number;
  appointmentDate: string;
  appointmentTime: string;
  duration: number;
  reason: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

//medical records
export interface MedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  diagnosis: string;
  treatment: string;
  prescription: string;
  date: string;
}

//create dctor dto
export interface CreateDoctorDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  licenseNumber: string;
  specialization: string;
  yearsOfExperience: number;
  education: string;
  officeAddress: string;
  consultationFee: number;
  availableDays: string[];
  availableHours: string;
  bio: string;
}

// Update doctor dto
export interface UpdateDoctorDto extends Partial<CreateDoctorDto> {}
//create order dto
export interface CreateOrdersDto {
  patientId: string;
  doctorId: string;
  items: Array<OrderItem>;
  totalAmount: number;
  status?: 'pending' | 'completed' | 'cancelled';
  orderedAt?: Date;
}

// Update order dto
export interface UpdateOrdersDto extends Partial<CreateOrdersDto> {}

//update admin dto
export interface updateAdminDto extends Partial<createAdminDto> {}

// Create appointment DTO
export interface CreateAppointmentDto {
  patientId: number;
  doctorId: number;
  appointmentDate: string;
  appointmentTime: string;
  duration: number;
  reason: string;
  status?: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

// Update appointment DTO
export interface UpdateAppointmentDto extends Partial<CreateAppointmentDto> {}

//pharmacy dto
export interface pharmacyDto {
  name: string;
  licenseId: string;
  address: string;
  contactPerson: string;
  phoneNumber: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Update pharmacy DTO
export interface UpdatePharmacyDto extends Partial<pharmacyDto> {}

// Create medicine DTO
export interface CreateMedicineDto {
  name: string;
  description: string;
  price: number;
  stock: number;
  expiryDate: string;
  manufacturer: string;
  category: string;
}

// Update medicine DTO
export interface UpdateMedicineDto extends Partial<CreateMedicineDto> {}

//record dto
export interface CreateMedicalRecordsDto {
  patientId: string;
  doctorId: string;
  diagnosis: string;
  treatment: string;
  prescription: string;
  date: string;
}

// Update medical record DTO
export interface UpdateMedicalRecordsDto extends Partial<CreateMedicalRecordsDto> {}

export interface CreatePharmacistDto {
  name: string;
  email: string;
  phone: string;
  status?: string;
  // Add other fields as needed
}
export interface UpdatePharmacistDto extends Partial<CreatePharmacistDto> {}