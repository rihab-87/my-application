import axios from 'axios'
import{LOAD_TASK_SUCCESS,
    LOAD_TASK_FAILED,
   ADD_TASK_SUCCESS,
    ADD_TASK_FAILED,
   EDIT_TASK_SUCCESS,
   EDIT_TASK_FAILED,
    DELETE_TASK_SUCCESS,
   DELETE_TASK_FAILED,
   LOAD_ALL_TASK_SUCCESS,
    LOAD_ALL_TASK_FAILED,  DELETE_ALL_TASK_SUCCESS,
    DELETE_ALL_TASK_FAILED
} from'../actions/types'
import setToken from '../setToken'
import { loadproject } from './projectActions'

   //post task
   export const addtask=(newtask)=>(dispatch)=>{
    setToken()
    axios.post('/task',newtask)
    .then((res)=>{
        dispatch({
        type:ADD_TASK_SUCCESS,
        payload:res.data
    })
// dispatch(loadalltask())


}
    )
    .catch((err)=>dispatch({
    type:ADD_TASK_FAILED,
     payload:err.response.data.errors
    }
    ))
    }
    //load tasks of one project
    export const loadtask=(id)=>(dispatch)=>{
        setToken()
       axios.get(`/task/${id}`)
       .then((res)=>dispatch({
           type:LOAD_TASK_SUCCESS,
           payload:res.data
       })
       )
    
       .catch((err)=>dispatch({
     type:LOAD_TASK_FAILED,
        payload:err.response.data.errors
       }
       ))
   }
   //delete task
   export const deletetask=(id)=>(dispatch)=>{
    setToken()
    axios.delete(`/task/${id}`)
    .then((res)=>{
        dispatch({
        type:DELETE_TASK_SUCCESS,
        payload:res.data
    });
    //  dispatch(loadalltask());
}
    )
    .catch((err)=>dispatch({
    type:DELETE_TASK_FAILED,
     payload:err.response.data.errors
    }
    ))
    }
    //edit task
    export const edittask=(id,edit_info)=>(dispatch)=>{
        setToken()
        console.log(edit_info)
        axios.put(`/task/${id}`,edit_info)

        .then((res)=>{
            console.log(res)
            dispatch({
            type:EDIT_TASK_SUCCESS,
            payload:res.data
        })
    //  dispatch(loadalltask())
}
        )
     
        .catch((err)=>dispatch({
      type:EDIT_TASK_FAILED,
         payload:err.response.data.errors
        }
        ))
    }
    export const loadalltask=()=>(dispatch)=>{
        setToken()
       axios.get('/task')
       .then((res)=>{
           
        try{dispatch({
           type:LOAD_ALL_TASK_SUCCESS,
           payload:res.data
       })}
    // dispatch(loadproject())
catch(e){console.log(res,e)}

    }
       )
    
       .catch((err)=>dispatch({
     type:LOAD_ALL_TASK_FAILED,
        payload:err.response.data.errors
       }
       ))
   }
     //delete all task of project
    //  export const deletealltask=(id)=>(dispatch)=>{
    //     setToken()
    //     axios.delete(`/task/project/${id}`)
    //     .then((res)=>
    //         dispatch({
    //         type:DELETE_ALL_TASK_SUCCESS,
    //         payload:res.data
    //     })
    //     )
    //     .catch((err)=>dispatch({
    //     type:DELETE_ALL_TASK_FAILED,
    //      payload:err.response.data.errors
    //     }
    //     ))
    //     }