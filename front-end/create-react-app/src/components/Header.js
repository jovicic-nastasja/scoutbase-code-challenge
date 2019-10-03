import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
`;

const NavbarInverse = styled.div`
  background-color: #222;
  border-color: #080808;
  border: 1px solid transparent;
  margin-bottom: 20px;
  min-height: 50px;
  position: relative;
`;

const NavbarContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const NavbarHeader = styled.div`
  float: left;
  margin-left: 20px;
  margin-right: 20px;
`;

const Nav = styled.div`
  margin-top: 0px;
  margin-bottom: 10px;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const Header = () => (
  <NavbarInverse>
    <NavbarContainer>
      <NavbarHeader>
        <LinkText to="/">Home</LinkText>
      </NavbarHeader>
      <Nav>
        <LinkText to="/countries">Countries</LinkText>
      </Nav>
    </NavbarContainer>
  </NavbarInverse>
);

export default Header;
