import{LOAD_PROJECT_SUCCESS,
    LOAD_PROJECT_FAILED,
   ADD_PROJECT_SUCCESS,
    ADD_PROJECT_FAILED,
   EDIT_PROJECT_SUCCESS,
   EDIT_PROJECT_FAILED,
    DELETE_PROJECT_SUCCESS,
   DELETE_PROJECT_FAILED,
   LOAD_ONE_PROJECT_SUCCESS,
   LOAD_ONE_PROJECT_FAILED} from'../actions/types'


const initstate={
    // token:localStorage.getItem('token'),
    projectdata:[],
    errors:null
}
const projectReducer=(state=initstate,action)=>{
    switch (action.type) {
        case LOAD_PROJECT_SUCCESS: localStorage.setItem('allproject',JSON.stringify(action.payload));return {...state,projectdata:action.payload}
        case LOAD_PROJECT_FAILED:return {...state,errors:action.payload}
        case EDIT_PROJECT_SUCCESS: return {...state,projectdata:state.projectdata.map((el)=>(el._id===action.payload._id)?action.payload : el)}
        case EDIT_PROJECT_FAILED:return {...state,errors:action.payload}

        case DELETE_PROJECT_SUCCESS:return {...state,projectdata:state.projectdata.filter((el)=>el._id!==action.payload._id)}
        case DELETE_PROJECT_FAILED:return {...state,errors:action.payload}
        case ADD_PROJECT_SUCCESS:return {...state,projectdata:[...state.projectdata,action.payload]}
        case ADD_PROJECT_FAILED:return {...state,errors:action.payload}

        case LOAD_ONE_PROJECT_SUCCESS:return {...state,projectdata:action.payload}
        case LOAD_ONE_PROJECT_FAILED:return {...state,errors:action.payload}
        default:
            return state;
    }
}
export default projectReducer