import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Progress } from 'antd';



function Prograte({taux}) {


      
 

    return (
        <div>
        
           <Progress
        //   format={(percent,projectprogress)=> percent+projectprogress}
        type='circle'
        width='70px'
      strokeColor={{
      
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={taux}
      status="active"
// defaultPercent={0}
    />   
        </div>
    )
}

export default Prograte
