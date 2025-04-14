import { useState } from "react"
import {Navbar, Container, Nav } from "react-bootstrap";
import { useEffect } from "react";
import logo from '../assets/img/cat_theme/Simran Karamchandani.svg';

export const NavBar = ()=>{
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{
    // used to directly manipulate dom elements. like adding or removing listeners. or to set timers
    // or for api stuff
    //ah it also runs after every render. it'll run after initial render then after a component is rendered cus a state was changed etc
    const onScroll = ()=>{
      //window here is global object
      if (window.scrollY>50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll",onScroll);
    // above line listens for an event called scroll and then calls the onScroll function 
    return ()=>window.removeEventListener("scroll",onScroll);
    //cleanup function. this function runs when the component is removed from the dom
    // or it runs before the effect runs again
    //This is the cleanup function. The function returned by useEffect runs when the component unmounts (is removed from the DOM) or before the effect runs again due to a change in dependencies (though in this case, the dependency array is empty, so it only runs on unmount).
  },[])
  // [] means its dependancy array. it tells react how many times to re run the effect
  // here its empty so the hook will run once initially

  const onUpdateActiveLink=(value)=>{
    setActiveLink(value);
    //why is there a function inside a function?
  }
    return (
        <>
        <Navbar expand="lg" className={scrolled? "scrolled":""}>
          {/* expand lg helps the nav links to collapse in hamburger menu in smaller screens */}
          {/* the scrolled thingy applies the css class to the navbar if scrolled state is true */}
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="logo" />
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle> 
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink=='home'? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                {/* this is where the navigation happens. */}
                <Nav.Link href="#skills" className={activeLink=='skills'? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink=='projects'? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
              <div className="social-icon">
                <a href="mailto:simbkaramchandani@gmail.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-envelope-fill"></i>
                </a>
                <a href="https://github.com/simranbk" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/simran-karamchandani-32030a2a3" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
                <button className="vvd" onClick={()=>console.log('connect')}>
                  <span>
                    Lets connect
                  </span>
                </button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    )
}