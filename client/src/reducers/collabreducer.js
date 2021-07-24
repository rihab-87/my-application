import{ADD_COLLAB_SUCCESS,DELETE_COLLAB_SUCCESS,INIT_COLLAB_SUCCESS} from'../actions/types'


const initstate={
    user:[]
}
  

const collabReducer=(state=initstate,action)=>{
    switch (action.type) {
       
        case INIT_COLLAB_SUCCESS:return {user:action.payload}
        case DELETE_COLLAB_SUCCESS:return {user:(state.user).filter((el)=>el._id!==action.payload._id)}
       
        case ADD_COLLAB_SUCCESS:return {user:[...state.user,action.payload]}
        
        default:
            return state;
    }
}
export default collabReducer