import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mr from './mr.png';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function NavbarFunction() {

  let startPage = document.getElementById("startPage");

  function HandleHomeClick(){
    startPage.className = "App";
  }

  return (
    <Navbar expand="lg">
      <Container className='navContainer'>
        <Navbar.Brand className='titleMarcel'>Jobs That Interest - Marcel Rodriguez</Navbar.Brand>
        <Link to={"/"} onClick={HandleHomeClick}>
          <Navbar.Brand onClick={HandleHomeClick}>
              <img
                alt=""
                src={mr}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"JobOne"}  className="nvidiaLink">
              Nvidia
            </Link>
            <Link to={"JobTwo"}  className="nvidiaLink">
              Riot
            </Link>
            <Link to={"JobThree"}  className="nvidiaLink">
              Twitch
            </Link>
            <Link to={"JobFour"}  className="nvidiaLink">
              Disney
            </Link>
            <Link to={"JobFive"}  className="nvidiaLink">
              Netflix
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarFunction;