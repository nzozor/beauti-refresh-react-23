import Link from "next/link";
import React from "react";
import Image from "next/image";
import BookButton from "../BookButton";
import styled from "styled-components";

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  position: absolute;
  right: 100vw;
`;
const LogoContainer = styled.div`
  img {
    width: 134px !important;
    height: 31px !important;
  }
`;
const Header = styled.header`
  background-color: white;
  padding: 18px 70px;
  height: 82px;
  display: flex;
  border-bottom: 1px solid #c7cbd6;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  align-items: center;
`;

const NavLink = styled.nav`
  ul {
    display: flex;
    font-family: "Nunito Sans", sans-serif;
    font-size: 13px;
    color: #3e3d3c; // TO DO: to move
    padding: 0;

    @media (max-width: 1023px) {
      display: none;
    }

    li {
      margin: 0 30px;
      list-style: none;

      a {
        text-decoration: none;
        text-transform: uppercase;
        color: inherit;
        color: black;
      }
    }
    display: flex;
  }
`;
function HeaderNav() {
  return (
    <Header>
      <Title>
        Beauti Skin Clinic London | Oval | Brixton Road | Skin Treatment | SW9
      </Title>
      <Link href="/">
        <LogoContainer>
          <Image
            src="/images/Logo.png"
            alt="Beauti Skin Clinic Logo Beauti Skin Clinic London | Oval | Brixton Road | Skin Treatment"
            width={300}
            height={100}
          />
        </LogoContainer>
      </Link>
      <NavLink>
        <ul>
          <li>
            <Link href="/"> Home </Link>{" "}
          </li>
          <li>
            <Link href="/about-us"> About us </Link>{" "}
          </li>
          <li>
            <Link href="/treatments"> Treatments </Link>{" "}
          </li>
          <li>
            <Link href="/contact"> Contact </Link>{" "}
          </li>
        </ul>
      </NavLink>
      <BookButton />
    </Header>
  );
}

export default HeaderNav;
