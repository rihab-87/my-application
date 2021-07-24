import axios from "axios"

const setToken=()=>{
    let token=localStorage.getItem('token')
    if(token){
        axios.defaults.headers.common['auto-tok']=token
    }
    else{
       delete axios.defaults.headers.common['auto-tok']
    }
}
export default setToken