import{REGISTER_SUCCESS,REGISTER_FAILED,LOGIN_SUCCESS,LOGIN_FAILED,LOAD_SUCCESS,LOAD_FAILED,LOAD_ALL_USERS_SUCCESS,
    LOAD_ALL_USERS_FAILED,
    LOGOUT, ADD_SUCCESS,ADD_FAILED,EDIT_PROFIL_SUCCESS,EDIT_PROFIL_FAILED, DELETE_USER_SUCCESS,DELETE_USER_FAILED} from'../actions/types'


const initstate={
    token:localStorage.getItem('token'),
     role:localStorage.getItem('role'),
    userdata:[],
    isAuth:false,
    errors:null
}
const authreducer=(state=initstate,action)=>{
    switch(action.type){
        case REGISTER_SUCCESS:
            console.log(action.payload) ;
            localStorage.setItem('token',action.payload.token);
             localStorage.setItem('role',action.payload.role);
             localStorage.setItem('isAuth',true);
            return {...state,
                    token:action.payload.token,
                     role:action.payload.role,
                    isAuth:true,
                    errors:null};
        case REGISTER_FAILED:
        localStorage.removeItem('token')
        // localStorage.removeItem('role')
        localStorage.setItem('isAuth',false);
        return{...state,
        isAuth:false,
        errors:action.payload};

        case LOGIN_SUCCESS: 
        localStorage.setItem('token',action.payload.token);
         localStorage.setItem('role',action.payload.role);
         localStorage.setItem('isAuth',true);
        return {...state,
                token:action.payload.token,
                 role:action.payload.role,
                isAuth:true,
                errors:null}
    case LOGIN_FAILED:
    localStorage.removeItem('token')
    // localStorage.removeItem('role')
    localStorage.setItem('isAuth',false);
    return{...state,
    isAuth:false,
    errors:action.payload};

//     case LOAD_SUCCESS: localStorage.setItem('user',JSON.stringify(action.payload));
//      return {...state,
//                              userdata:action.payload,
//                             //   isAuth:true,
//                                errors:null}
// case LOAD_FAILED:return{...state,errors:action.payload};

case LOAD_ALL_USERS_SUCCESS:  return {...state,
    userdata:action.payload,
    //  isAuth:true,
      errors:null}
case LOAD_ALL_USERS_FAILED:return{...state,errors:action.payload};

case LOGOUT:  localStorage.setItem('isAuth',false);
localStorage.removeItem('token')
localStorage.removeItem('user');
return {...state,isAuth:false,errors:null,userdata:[]};

case ADD_SUCCESS:  return {...state,
    userdata:action.payload,
     isAuth:true,
      errors:null}
case ADD_FAILED:return{...state,errors:action.payload};

// case EDIT_PROFIL_SUCCESS: localStorage.setItem('user',action.payload);
//  return {...state,userdata:state.userdata.map((el)=>(el._id===action.payload._id)?action.payload : el)}
// case EDIT_PROFIL_FAILED:return {...state,errors:action.payload}

case DELETE_USER_SUCCESS:return {...state,userdata:state.userdata.filter((el)=>el._id!==action.payload._id)}
case DELETE_USER_FAILED:return {...state,errors:action.payload}


    default: return state
    }
}
export default authreducer