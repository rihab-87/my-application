import React from 'react'
import { useSelector } from 'react-redux'
import {Route,Redirect} from 'react-router-dom'

function PrivatRoute( {component:Component,...rest}) {
    const auth=useSelector(state=>state.auth)
     const isAuth=localStorage.getItem('isAuth')
     console.log("private",isAuth)
    return (
        <div>
            <Route {...rest} render={props=>localStorage.getItem('isAuth')===false? <Redirect to='/'/> :<Component {...props}/>}/>
        </div>
    )
}

export default PrivatRoute
