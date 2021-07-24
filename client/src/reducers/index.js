import{combineReducers} from 'redux'
import Authreducer from'./authreducer'
import ProjectReducer from'./projectReducer'
import taskReducer from'./taskReducer'
import collabreducer from'./collabreducer'
import alltaskreducer from './alltaskreducer'
import userreducer from './userreducer'
export default combineReducers({auth:Authreducer,project:ProjectReducer,task:taskReducer,collab:collabreducer,alltask:alltaskreducer,user:userreducer})