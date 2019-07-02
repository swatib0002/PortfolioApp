import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';

const myStyle = {
  backgroundImage: 'url(images/about.jpg)',
  width: '200px',
  height: '300px',
  margin: '0 auto',
  backgroundSize: 'cover',
  marginBottom:'30px',
  marginTop:'10px'
}

class LandingPage extends Component{
render(){
    return(
        <div style={{width: '100%', margin: 'auto'}}>
        <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
              /> */}
             <div  style={myStyle}  alt="avatar" />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>

            <hr/>

          <p>JAVA | HTML/CSS | Bootstrap | JavaScript | ReactJS | Angular | Ionic | NodeJS | MySQL</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
        </div>

      </div>
    )
}
}

export default LandingPage; 