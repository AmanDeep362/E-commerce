import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom';
import App from './App';
import Accesories from './components/accesories/Accesories';
class Router extends React.Component{
  render(){
    return(
      <>
       <Switch>
        <Route path='/accesories' exact component={Accesories}></Route>
        <Route path='/' exact component={App}></Route>
        
      </Switch>
      </>
    );
  }
}
export default Router;
