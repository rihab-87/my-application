import{LOAD_USER_SUCCESS,LOAD_USER_FAILED,EDIT_PROFIL_SUCCESS,EDIT_PROFIL_FAILED
 } from'../actions/types'


const initstate={
    token:localStorage.getItem('token'),
     role:localStorage.getItem('role'),
    usercoll:[],
  
    errors:null
}
const userreducer=(state=initstate,action)=>{
    switch(action.type){
       
       

    case LOAD_USER_SUCCESS: localStorage.setItem('user',JSON.stringify(action.payload));
     return {...state,
                             usercoll:action.payload,
                            //   isAuth:true,
                               errors:null}
case LOAD_USER_FAILED:return{...state,errors:action.payload};


case EDIT_PROFIL_SUCCESS: localStorage.setItem('user',action.payload);
 return {...state,userdata:state.userdata.map((el)=>(el._id===action.payload._id)?action.payload : el)}
case EDIT_PROFIL_FAILED:return {...state,errors:action.payload}



    default: return state
    }
}
export default userreducer