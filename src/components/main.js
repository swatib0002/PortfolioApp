import React from 'react';
import LandingPage from './landingpage';
import Contact from './contact';
import About from './aboutme';
import Project from './project'; 
import Resume from './resumepage';
import {Switch, Route} from 'react-router-dom';

const Main =() => (
    <Switch>
    {/* <Route exact path = "/" component = {LandingPage}/> */}
    <Route exact path = "/" component = {LandingPage}/>
    <Route exact path = "/home" component = {LandingPage}/>
    <Route exact path = "/contact" component = {Contact}/>
    <Route exact path = "/project" component = {Project}/>
    <Route exact path = "/resumepage" component = {Resume}/>
</Switch>
)
   


export default Main;