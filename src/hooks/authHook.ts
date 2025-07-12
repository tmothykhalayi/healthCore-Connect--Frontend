import  {loginFn}  from '../api/autha'
import type { loginResponse, login } from '../Types/interface'
import { useMutation } from '@tanstack/react-query'

export const useLoginHook = () => {
  return useMutation <loginResponse, Error, login>({
    mutationKey: ['login'],
    mutationFn: (data: login) => loginFn(data.email, data.password),
    
  })

}
