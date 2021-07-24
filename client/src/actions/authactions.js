import{REGISTER_SUCCESS,REGISTER_FAILED,LOGIN_SUCCESS,LOGIN_FAILED,LOAD_SUCCESS,LOAD_FAILED,LOAD_ALL_USERS_SUCCESS,
    LOAD_ALL_USERS_FAILED,LOGOUT,
ADD_SUCCESS,ADD_FAILED,EDIT_PROFIL_SUCCESS,EDIT_PROFIL_FAILED,
DELETE_USER_SUCCESS,DELETE_USER_FAILED
} from'./types'

import axios from 'axios'
import setToken from '../setToken'


export const register=(info)=>(dispatch)=>{
    axios.post('/register',info)
    .then((res)=>{
     console.log(res)
    dispatch({
        type:REGISTER_SUCCESS,
        payload:res.data
    })})
    .catch((err)=>dispatch({
        type:REGISTER_FAILED,
        payload:err.res.data.errors
    }))

}
export const login=(info)=>(dispatch)=>{
    axios.post('/login',info)
    .then((res)=>{
        try{console.log(res);
    dispatch({
        type:LOGIN_SUCCESS,
        payload:res.data
    });
}
  catch(e){console.log(res,e)}

})

    .catch((err)=>{
    console.log(err)
    dispatch({
        type:LOGIN_FAILED,
        payload:err.res.data.errors
    })})

}

export const logout=()=>(dispatch)=>{
    
    dispatch({
        type:LOGOUT
       
    })}




export const load=()=>(dispatch)=>{
    setToken()
    axios.get('/login')
    .then((res)=>{

try{
    console.log("res",res.data)
    dispatch({
        type:LOAD_SUCCESS,
        payload:res.data
    })

}

catch(e){console.log(res,e)}


})
    
    
    
    
    .catch((err)=>{
    
    console.log(err.response.data.errors)
    dispatch({
        
        type:LOAD_FAILED,
        payload:err.response.data.errors
    })})
}
// load all users
export const load_all_users=()=>(dispatch)=>{
    setToken()
    axios.get('/login/all')
    .then((res)=>{
    // console.log(res)
    dispatch({
        type:LOAD_ALL_USERS_SUCCESS,
        payload:res.data
    })})
    .catch((err)=>{
    
    console.log(err.response.data.errors)
    dispatch({
        
        type:LOAD_ALL_USERS_FAILED,
        payload:err.response.data.errors
    })})
}
// addcollab
export const addcollab=(info)=>(dispatch)=>{
    axios.post('/login/add',info)
    .then((res)=>{
     console.log(res)
    dispatch({
        type:ADD_SUCCESS,
        payload:res.data
    })})
    .catch((err)=>{
    console.log(err)
    dispatch({
        type:ADD_FAILED,
        payload:err.res.data.errors
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
        payload:res.data})
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

// delete profile
export const deleteprofile=(id)=>(dispatch)=>{
    setToken()
    axios.delete(`/login/${id}`)
    .then((res)=>{
        try{
        console.log(res)
        dispatch({
        type:DELETE_USER_SUCCESS,
        payload:res.data})
    }

        catch(e){ console.log(res,e)}
    }
    )
 
    .catch((err)=>dispatch({
  type:DELETE_USER_FAILED,
     payload:err.response.data.errors
    }
    ))
}