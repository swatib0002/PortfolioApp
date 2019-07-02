import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Navigation from './components/Navigation';
// import Header from './components/Header';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
// import Service from './Services/Service';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    // <div>
    //   <Navigation LogoTitle="React Portfolio"/>
    //   <Header title="Swati Bansal"></Header>
    // </div>
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Portfolio" scroll>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/resumepage">Resume</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/home">Home</Link>
            <Link to="/resumepage">Resum</Link>
            <Link to="/project">Project</Link>
            <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
             <Main/>
        </Content>
    </Layout>
</div>

    
  );
}

export default App;
