
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Project from './pages/project'
import Tasks from './pages/tasks'
import Dashboard from './pages/dashboard'
import NavBar from './components/navBar';
import PrivatRoute from './components/privatRoute';

import Home from './pages/home';
import Dashboard_user from './pages/dashboard_user';
import Project_user from './pages/Project_user';
import Tasksuser from './components/tasksuser';
import Navproject from './pages/navproject';
import tasksadmin from './views/tasksadmin';
import Dashboard_admin from './views/dashboard_admin';
import Dashview_user from './views/dashview_user';
import Projview_user from './views/projview_user';
import Taskview_user from './views/taskview_user';
import Collabview from './views/collabview';
import Collabviewuser from './views/collabviewuser';
import Profileview_user from './views/profileview_user'
import Profileview_admin from './views/profileview_admin'
import {Container} from'react-bootstrap'
import Newdash from'./views/newdash'
function App() {
  return (
   
    <Router>
      {/* <NavBar/> */}
      <Switch>
      <Route exact path='/' component={Home}/>
       <PrivatRoute exact path='/dashboard' component={Dashboard_admin}/> 
      {/* <PrivatRoute exact path='/dashboard' component={Newdash}/> */}
      <PrivatRoute exact path='/dashuser' component={Dashview_user}/>
      <PrivatRoute exact path='/projectuser/:id' component={Projview_user}/>
      {/* <Route exact path='/projectuser/:id' component={Project_user}/> */}
      <PrivatRoute exact path='/register' component={Register}/>
      <PrivatRoute exact path='/login' component={Login}/>
      <PrivatRoute exact path='/project' component={Navproject}/>
      <PrivatRoute exact path='/task/:id' component={tasksadmin}/>
      <PrivatRoute exact path='/tasksuser/:userid/:projectid' component={Taskview_user}/>
      <PrivatRoute exact path='/collaborators' component={Collabview}/>
      <PrivatRoute exact path='/collaborators_user/:id' component={Collabviewuser}/>
      <PrivatRoute exact path='/profile/:id' component={Profileview_user}/>
      <PrivatRoute exact path='/profile' component={Profileview_admin}/>
      {/* <Route exact path='/tasksuser/:userid/:projectid' component={Tasksuser}/> */}

      </Switch>



    </Router>
    
  );
}

export default App;
