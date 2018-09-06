import React, { Component,Fragment } from 'react';
import {NavLink, Route,Switch,Redirect } from 'react-router-dom'
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          {
            routes.map(route=>{
              const {
                exact,
                linkText,
                path,
                isNav
              }=route
              return (
                isNav===true&&<NavLink key={path} exact={exact}  to={this.props.match.path + path}>{linkText}</NavLink> 
               )
              
            })
          }
        </div>
        <Switch>
        {
            routes.map(route=>{
              const {
                exact,
                component,
                path
              }=route
              return (
                <Route path={this.props.match.path + path} exact={exact} component={component} key={path}/>
               )
              
            })
          }
          <Redirect to='/'/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
