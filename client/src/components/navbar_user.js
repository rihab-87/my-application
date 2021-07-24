import React from 'react'
import{Link}from'react-router-dom'
function navbar_user({id}) {
    return (
        
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <Link to='/dashuser'>dashborduser</Link>
            {/* <Link to='/register'>register</Link>
            <Link to='/login'>Login</Link> */}
            <Link to={`/projectuser/${id}`}> My projects</Link>

            <Link >Log out </Link>

        </div>
    )
}

export default navbar_user
