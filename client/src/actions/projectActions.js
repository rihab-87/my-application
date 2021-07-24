import axios from 'axios'
import setToken from '../setToken.js'
import{LOAD_PROJECT_SUCCESS,
    LOAD_PROJECT_FAILED,
   ADD_PROJECT_SUCCESS,
    ADD_PROJECT_FAILED,
   EDIT_PROJECT_SUCCESS,
   EDIT_PROJECT_FAILED,
    DELETE_PROJECT_SUCCESS,
   DELETE_PROJECT_FAILED,
   LOAD_ONE_PROJECT_SUCCESS,
   LOAD_ONE_PROJECT_FAILED} from'./types.js'

//load all project

    export const loadproject=()=>(dispatch)=>{
        setToken()
       axios.get('/project')
       .then((res)=>dispatch({
           type:LOAD_PROJECT_SUCCESS,
           payload:res.data
       })
       )
    
       .catch((err)=>dispatch({
     type:LOAD_PROJECT_FAILED,
        payload:err.response.data.errors
       }
       ))
   }
   //edit project 
   export const editproject=(id,edit_info)=>(dispatch)=>{
    setToken()
    axios.put(`/project/${id}`,edit_info)
    .then((res)=>{ 
        try{
        
        console.log(res)
        dispatch({
        type:EDIT_PROJECT_SUCCESS,
        payload:res.data

    
    })   ; dispatch(loadproject())}
    catch(e){console.log(res,e)}

})
    
 
    .catch((err)=>dispatch({
  type:EDIT_PROJECT_FAILED,
     payload:err.response.data.errors
    }
    ))
}
//delet project
export const deleteproject=(id)=>(dispatch)=>{
setToken()
axios.delete(`/project/${id}`)
.then((res)=>{
    dispatch({
    type:DELETE_PROJECT_SUCCESS,
    payload:res.data
});
 dispatch(loadproject())}
)
.catch((err)=>dispatch({
type:DELETE_PROJECT_FAILED,
 payload:err.response.data.errors
}
))
}
//add project
export const addproject=(newproject)=>(dispatch)=>{
    setToken()
    axios.post('/project',newproject)
    .then((res)=>{
        dispatch({
        type:ADD_PROJECT_SUCCESS,
        payload:res.data
    });   dispatch(loadproject()) }
    )
    .catch((err)=>dispatch({
    type:ADD_PROJECT_FAILED,
     payload:err.response.data.errors
    }
    ))
    }
    //get one project by id 
    setToken()
    export const load_one_project=(id)=>(dispatch)=>{
       axios.get(`/project/${id}`)
       .then((res)=>{
           
        
         try{dispatch({
           type:LOAD_ONE_PROJECT_SUCCESS,
           payload:res.data

        })}

        catch(e){console.log(res,e)}
    }
       )
    
       .catch((err)=>dispatch({
     type:LOAD_ONE_PROJECT_FAILED,
        payload:err.response.data.errors
       }
       ))
   }