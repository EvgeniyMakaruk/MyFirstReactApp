import axios from "axios";


const instanse = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': '53ce3e57-898f-4445-bb62-40cd29d21ae8'
   }
})


export const usersAPI={
   getUsers(currentPage = 1, pageSize = 10){
      return instanse.get( `users?page=${currentPage}&count=${pageSize}`)
         .then(responce => responce.data)
   }
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
   return instanse.get( `follow?page=${currentPage}&count=${pageSize}`)
      .then(responce => responce.data)
}