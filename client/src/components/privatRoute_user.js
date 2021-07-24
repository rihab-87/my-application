import React from 'react'
import { useSelector } from 'react-redux'
import {Route,Redirect} from 'react-router-dom'

function PrivatRoute_user( {component:Component,...rest}) {
    const auth=useSelector(state=>state.auth)
    return (
        <div>
            <Route {...rest} render={props=>!auth.isAuth? <Redirect to='/'/> :<Component {...props}/>}/>
        </div>
    )
}

export default PrivatRoute_user
