import{LOAD_TASK_SUCCESS,
    LOAD_TASK_FAILED,
   ADD_TASK_SUCCESS,
    ADD_TASK_FAILED,
   EDIT_TASK_SUCCESS,
   EDIT_TASK_FAILED,
    DELETE_TASK_SUCCESS,
   DELETE_TASK_FAILED,
   LOAD_ALL_TASK_SUCCESS,
   LOAD_ALL_TASK_FAILED
} from'../actions/types'

   const initstate={
    // token:localStorage.getItem('token'),
    taskdata:[],
    errors:null
}
const taskreducer=(state=initstate,action)=>{
    switch (action.type) {
        case ADD_TASK_SUCCESS: localStorage.setItem('taskdata',JSON.stringify(action.payload)) ;
       
        return {...state,taskdata:[...state.taskdata,action.payload]}
        case ADD_TASK_FAILED:return {...state,errors:action.payload}
        
        case LOAD_TASK_SUCCESS: localStorage.setItem('taskdata',JSON.stringify(action.payload)) ;
        
        return {...state,taskdata:action.payload}
        case LOAD_TASK_FAILED:return {...state,errors:action.payload}
        case DELETE_TASK_SUCCESS:return {...state,taskdata:state.taskdata.filter((el)=>el._id!==action.payload._id)}
        case DELETE_TASK_FAILED:return {...state,errors:action.payload}

        case EDIT_TASK_SUCCESS: return {...state,taskdata:state.taskdata.map((el)=>(el._id===action.payload._id)?action.payload : el)}
        case EDIT_TASK_FAILED:return {...state,errors:action.payload}

        case LOAD_ALL_TASK_SUCCESS: localStorage.setItem('alltask',JSON.stringify(action.payload)) ; return {...state,taskdata:action.payload}
        case LOAD_ALL_TASK_FAILED:return {...state,errors:action.payload}


    default:
        return state;
    }
}
export default taskreducer