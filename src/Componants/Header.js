import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Logo>
        Tiny<span>Tails</span>
      </Logo>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/story">Story</Link>
        </NavItem>
        <NavItem>
          <Link to="/category">Category</Link>
        </NavItem>
        <NavItem>
          <Link to="/aboutus">About Us</Link>
        </NavItem>
        <NavItem>
          <Link to="/contactus">Contact Us</Link>
        </NavItem>
      </NavList>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  z-index: 100;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 80px;
  position: absolute;
  top: 0px;
  display: grid;
  grid-template-columns: 50vw 40vw;
  grid-gap: 3vw;
`;
const NavList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 7vw);
  grid-gap: 3vw;
  justify-content: right;
  padding-top: 30px;
`;
const NavItem = styled.div`
  a {
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
    color: #FFF6B9;
    letter-spacing: 1px;
    :hover {
      color: yellow;
    }
  }
`;
const Logo = styled.div`
  color: white;
  font-size: 40px;
  padding: 15px;
  padding-right: 35vw;
  span {
    color: #fbe551;
  }
`;
