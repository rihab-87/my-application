import React, { useState } from 'react'
import { DatePicker, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { editproject } from '../actions/projectActions';
import { edittask } from '../actions/taskactions';
import moment from 'moment';
import editdate from '../style/editdate.css'


function Editdate({id,start,end,datechoice,choice}) {
    // datechoice==='start'?{startingDate:start}:{endingDate:end}
    console.log(start)
    console.log(end)
    moment().format();
    const dateFormat = "YYYY-MM-DD";
    const startt=moment(start).format("YYYY-MM-DD")
    const endd=moment(end).format("YYYY-MM-DD")
      const[editdate, setEditdate] = useState( datechoice==='start'?{startingDate:start}:{endingDate:end})
      const dispatch=useDispatch()
      console.log(editdate)
     const handleselect=(date,dateString)=>{
         console.log(editdate)
        datechoice==='start'?setEditdate({startingDate:dateString}):setEditdate({endingDate:dateString})
  
         if(choice==="project"){
             if(datechoice==='start'){
      dispatch(editproject(id,{startingDate:dateString}))}
      else{  dispatch(editproject(id,{endingDate:dateString}))}
    }
      else {  if(datechoice==='start'){
        dispatch(edittask(id,{startingDate:dateString}))}
        else{  dispatch(edittask(id,{endingDate:dateString}))} }
     }
 





    //  dispatch(edittask(id,editdate))

    // const startt=moment(start).format("YYYY/MM/DD")
    // function onChange(date, dateString) {
    //     // console.log(date, dateString);
    //     // console.log(start)
    //     setEditdate({startingDate:moment(date).format("YYYY/MM/DD")})
    //    const starttt=startt.split('').join("")
    //     console.log((starttt))
    //     console.log(editdate) 
      
    return (
        <div>
            {/* <DatePicker
            defaultValue={moment(startt, dateFormat)}
            format={dateFormat}
        /> */}
            
      {datechoice==='start'?<DatePicker  id="date_style" style={{backgroundColor:"#f8f9fa"}} selected ={editdate.startingDate}  defaultValue={moment(start, dateFormat)}
            format={dateFormat}  onChange={handleselect} />
     :<DatePicker id="date_style"   style={{backgroundColor:"#f8f9fa" }} selected ={editdate.endingDate}   defaultValue={moment(end, dateFormat)}
            format={dateFormat} onChange={handleselect} />} 
   {console.log(editdate)}
    
        </div>
    )
}

export default Editdate
