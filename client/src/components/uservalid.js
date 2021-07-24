import React from 'react'

function uservalid( {isvalid}) {
    return (
        <div>
            {isvalid==="valid"?<h6 style={{color:"green" ,fontWeight:"bolder"}}>VALID</h6 >:<h6 style={{color:"red" ,fontWeight:"bolder"}}>INVALID</h6>}
            
        </div>
    )
}

export default uservalid
