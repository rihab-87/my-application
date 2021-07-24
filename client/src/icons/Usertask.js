import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loadproject} from'../actions/projectActions'
import {load_all_users} from'../actions/authactions'
import {load_one_project} from'../actions/projectActions'
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;


function Usertask({id,handleuser}) {

const dispatch= useDispatch()

useEffect(() => {
    
dispatch(load_one_project(id))
// dispatch(load_all_users())

    }
, [])

const [collabselect, setCollabselect] = useState()
const projects = useSelector(state => state.project.projectdata)
console.log(projects)
// const users = useSelector(state => state.auth.userdata)

// // const project=projects.filter((el)=>el._id===id)
// // // console.log(project)
// const collab=users.filter((el)=>(projects[0].user._id).includes(el._id)===true)
// console.log(collab)

const collab=projects.user
const handleselect=(e)=>{
    setCollabselect(e)
console.log(collabselect)
handleuser(e)
}

function onSearch(val) {
    console.log('search:', val);
  }

    return (

<Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a collaborator "
    optionFilterProp="children"
    onChange={handleselect}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    value={collabselect}
  >
       
    {collab?collab.map((e, key) => {
       return <Option key={key}   value={e._id}>{e.firstName}</Option>;
   }):null}
  </Select>


//         <div>
//           <select name=" select collaborator" value={collabselect} onChange={handleselect}>
//           <option value="choose a task collaborator">choose a task collaborator</option>
//     {collab?collab.map((e, key) => {
//         return <option key={key}   value={e._id}>{e.firstName}</option>;
//     }):null}
// </select>
// {console.log(collabselect)}
//         </div>
    )
}

export default Usertask
