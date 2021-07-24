
import { ADD_COLLAB_SUCCESS,DELETE_COLLAB_SUCCESS,INIT_COLLAB_SUCCESS} from'./types.js'

  export const addcollab=(newcollab)=>{
  return{
    type:ADD_COLLAB_SUCCESS,
    payload:newcollab
    }
    
  }
  export const deletecollab=(id)=>{
    return{
      type:DELETE_COLLAB_SUCCESS,
      payload:id
      }
      
    }
    export const initcollab=(initval)=>{
        return{
          type:INIT_COLLAB_SUCCESS,
          payload:initval
          }
          
        }