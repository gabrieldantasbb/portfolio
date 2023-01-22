import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Div1,
  Div2,
  Img,
  Menu,
  MenuBar,
  NavLink,
} from "./NavBarStyles";
import { menu, close } from "../../assets";

export const NavBar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <Section>
      <Container>
        <Div1>GB</Div1>
        <Menu>
          <Img
            src={toggle ? menu : close}
            alt="button menu"
            onClick={() => setToggle(!toggle)}  
          />
        </Menu>
        <MenuBar show={toggle} >
          <NavLink>Projetos</NavLink>
          <NavLink>Sobre mim</NavLink>
          <NavLink>Currículo </NavLink>
          <NavLink>Contato</NavLink>
        </MenuBar>
        <Div2>
          <NavLink>Projetos</NavLink>
          <NavLink>Sobre mim</NavLink>
          <NavLink>Currículo </NavLink>
          <NavLink>Contato</NavLink>
        </Div2>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.color.purplebrown};
`;
