import axios from 'axios'
import{
   GET_ALL_TASK_SUCCESS,
    GET_ALL_TASK_FAILED
} from'../actions/types'
import setToken from '../setToken'
export const getalltask=()=>(dispatch)=>{
    setToken()
   axios.get('/task')
   .then((res)=>dispatch({
       type:GET_ALL_TASK_SUCCESS,
       payload:res.data
   })
   )

   .catch((err)=>dispatch({
 type:GET_ALL_TASK_FAILED,
    payload:err.response.data.errors
   }
   ))
}