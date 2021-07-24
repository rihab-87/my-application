import{
   GET_ALL_TASK_SUCCESS,
   GET_ALL_TASK_FAILED} from'../actions/types'

   const initstate={
    // token:localStorage.getItem('token'),
    alltaskdata:[],
    errors:null
}
const alltaskreducer=(state=initstate,action)=>{
    switch (action.type) {
       

        case GET_ALL_TASK_SUCCESS:  localStorage.setItem('alltaskdata',JSON.stringify(action.payload))
        return  {...state,alltaskdata:action.payload}
        case GET_ALL_TASK_FAILED:return {...state,errors:action.payload}


    default:
        return state;
    }
}
export default alltaskreducer