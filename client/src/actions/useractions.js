import{LOAD_USER_SUCCESS,LOAD_USER_FAILED,EDIT_PROFIL_SUCCESS ,EDIT_PROFIL_FAILED} from'./types'

import axios from 'axios'
import setToken from '../setToken'

// loaduser
export const loaduser=()=>(dispatch)=>{
    setToken()
    axios.get('/login')
    .then((res)=>{

try{
    console.log("res",res.data)
    dispatch({
        type:LOAD_USER_SUCCESS,
        payload:res.data
    })

}

catch(e){console.log(res,e)}

})
    .catch((err)=>{
    
    console.log(err.response.data.errors)
    dispatch({
        
        type:LOAD_USER_FAILED,
        payload:err.response.data.errors
    })})
}
// edit profile
export const editprofile=(id,edit_info)=>(dispatch)=>{
    setToken()
    axios.put(`/login/${id}`,edit_info)
    .then((res)=>{
        try{
        console.log(res)
        dispatch({
        type:EDIT_PROFIL_SUCCESS,
        payload:res.data});

        // dispatch(loaduser())
    }

        catch(e){ console.log(res,e)}
    }
    )
 
    .catch((err)=>dispatch({
  type:EDIT_PROFIL_FAILED,
     payload:err.response.data.errors
    }
    ))
}