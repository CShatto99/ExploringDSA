import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import {
  Container,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const Toolbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="fixed-top" color="dark" dark expand="md">
      <Container>
        <ToggleButton click={props.toggleButtonClickHandler} />
        <NavbarBrand href="/">Exploring DS&A</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/code">
                Code
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Toolbar;
