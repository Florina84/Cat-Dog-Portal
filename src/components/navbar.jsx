import React from "react";
import { HasRouter, Route, Link } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <ul className="nav navbar-nav">
                      <li>
                        <Link className="nav-item nav-link" to="/Upload">Upload</Link>
                      </li>
                      <li>
                        <Link className="nav-item nav-link" to="/myImages">My Images</Link>
                      </li>
                      <li>
                        <Link className="nav-item nav-link" to="/PublicImages">Public Images</Link>
                      </li>
                    </ul>
                </div>
            </div>
        </nav>
    </> 
  );
};

export default Navbar;

 {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <div className="container-fluid">
        <div className="navbar-nav">
          <ul clasName="navbar-nav" style={{listStyleType: "none"}}>
            <li className="nav-item">
              <Link className="nav-link" to="/myImages">My images</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Upload">Upload images</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="PublicImages">Public images</Link>
            </li>   
          </ul>
          </div>
         </div> 
      </div>
    </nav>   

     
  <Navbar bg="light" variant="light">
    <Container>
    <Nav className="me-auto">
      <Nav.Link >
        <Link className="nav-link" style={{padding: 0}} to="MyImages">My images</Link>
      </Nav.Link>
      <Nav.Link>
        <Link className="nav-link" style={{padding: 0}} to="Upload">Upload images</Link>
      </Nav.Link>
      <Nav.Link>
      <Link className="nav-link" style={{padding: 0}} to="PublicImages">Public images</Link>
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}