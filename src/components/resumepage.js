import React,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { IoIosMail } from "react-icons/io";
import { FaInstagram, FaLanguage } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const myStyle = {
  backgroundImage: 'url(images/about.jpg)',
  width: '150px',
  height: '200px',
  margin: '0 auto',
  backgroundSize: 'cover',
  marginBottom:'30px',
  marginTop:'10px'
}

class Resume extends Component{
render(){
    return(
        <div>
        <Grid>
          <Cell col={3}>
            {/* <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div> */}

            <div >
              <div  style={myStyle}/>
            
              {/* <div style={{textAlign: 'center'}}> */}
              <h3 style={{font: 'Georgia','margin':'0px'}}>Swati Bansal </h3>
              <h5 style={{font: 'Georgia','color': '#A9A9A9',fontSize:'14px','padding':'0px','marginTop':'5px','marginBottom':'15px'}}>Software Developer</h5>
              <span style={{fontSize:'14px'}}> < IoIosMail /> swatib0002@gmail.com</span>
              <hr style={{borderTop: '3px solid #833fb2', width: '90%'}}/>
              <p>I am a Software Developer with an Engineer’s Degree focused on Computer Science. I love exploring new technologies.
                   I am having almost 2 years of experience in Java and JavaScript. Currently working in Flipkart as a full stack developer.</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '90%'}}/>
              
              <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/swt.swati.165" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a></li>
                <li><a href="https://www.instagram.com/swatiibansal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                <li><a href="https://www.linkedin.com/in/swati-bansal-201b60bb/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
              </ul>
            </nav>
            </div>

            {/* <h2 style={{paddingTop: '2em'}}>Paul Hanna</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>  */}



             {/* <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Swati Bansal</a></h1>
              <span className="email"><i className="icon-mail"></i> Swatib0002@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/dhruv-b-545b52a9/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/Dhruv34788" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
              <p><small>
                Something coming soon !!
              </small></p>
            </div>
          </aside>
        </div> */}


          </Cell>



          <Cell className="resume-right-col" col={9}>
             {/* <h2>Education</h2>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName=""
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />
               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />  */}
              <h2>Experience</h2>
            <Experience
              startYear={'Feb-2019'}
              endYear={'Present'}
              jobName="Senior Software Engineer at Flipkart Internet pvt ltd.,BENGALURU"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <Experience
                startYear={'May-2018'}
                endYear={'Jan-2019'}
                jobName="Conslutant Engineer"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
                <Experience
                startYear={'Nov-2017'}
                endYear={'April-2018'}
                jobName="Intern Software Developer"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

                <Experience
                startYear={'Nov-2017'}
                endYear={'April-2018'}
                jobName="Application Developer"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />

                <Experience
                startYear={'Nov-2017'}
                endYear={'April-2018'}
                jobName="Intern at Smartivity"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Tech Stack</h2>
              <Grid>
                <Cell col={4}>
                <h5>Languages:</h5>
                <Skills
                skill="JAVA"
                progress={90}
                />
                <Skills
                    skill="Scala"
                    progress={60}
                    />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="JavaScript"
                    progress={60}
                    />
                   
                </Cell>
                <Cell col={4}>
                <h5>Frameworks:</h5>
                <Skills skill="AngularJs and Angular 2,4,6" />
                <Skills skill="ReactJs" />
                <Skills skill="Ionic" /> 
                <Skills skill="NodeJs" /> 
                <Skills skill="Spring" /> 
                <Skills skill="Play" /> 
                </Cell>
              </Grid>
             
              
          </Cell>
        </Grid>
      </div>
    )
}
}

export default Resume; 