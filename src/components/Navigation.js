import React,{Component} from 'react';
import './Navigation.css'

class Navigation extends Component{
    render(){
        const sections = ['HomePage','About','Portfolio','Contact'];
        //lopping throgh sections item 
        const navlinks = sections.map(section=>{
           return(
            <li><a href={"#"+section}>{section}</a></li>  
           )
        })
        return(
            <nav > <h2 className="logo" >{this.props.LogoTitle}</h2> 
            <ul >
                {/* <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Protfolio</a></li>
                <li><a href="#">Contact</a></li> */}

                {navlinks}
            </ul>
            </nav>
            
        );
    }
}
export default Navigation;