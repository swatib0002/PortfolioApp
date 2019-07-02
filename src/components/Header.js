import React from 'react';
import Background from './Images/0266554465.jpeg';
import './Header.css'

const imageStyle = {
    'background-image': `url(${Background})`,
    'height': '80vh',
    'backgroundSize': 'cover'

};

class Header extends React.Component{
 

render(){
    return(
        <header style = {imageStyle}>
         <h1>{this.props.title}</h1>
        </header>
    )
}
};

export default Header;