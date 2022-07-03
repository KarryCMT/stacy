import http from '@/utils/http.js'
 const Register = (params) => http.post('/api/user/register',params)
 export {
    Register
 }
