import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import auto2 from "../../../Assets/auto2.jpg";
import "../../accueil/style.css"; // Assurez-vous d'importer le fichier de style

function CustomNavbar() {
  return (
    <Navbar bg="black" variant="dark" className="custom-navbar">
      <Image src={auto2} alt="Votre Logo" height="90" width="200" />
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" className="text-dark">
          <FaHome className="icon-spacing" /> Accueil
        </Nav.Link>
        <Nav.Link as={Link} to="/login" className="text-dark">
          <FaSignInAlt className="icon-spacing" /> Se connecter
        </Nav.Link>
        <Nav.Link as={Link} to="/inscription" className="text-dark">
          <FaUserPlus className="icon-spacing" /> S'inscrire
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" className="text-dark">
          <RiContactsLine className="icon-spacing" /> Contact
        </Nav.Link>
        <NavDropdown
          title="Services"
          id="basic-nav-dropdown"
          className="text-dark"
        >
          <NavDropdown.Item href="/">Examen</NavDropdown.Item>
          <NavDropdown.Item href="/">Cours</NavDropdown.Item>
          <NavDropdown.Item href="/">Test</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
