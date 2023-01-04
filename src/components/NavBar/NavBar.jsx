import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Container, Div1, Div2, NavLink } from "./NavBarStyles";

export const NavBar = () => (
  <Section>
    <Container>
      <Div1>GB</Div1>
      <Div2>
        <NavLink>Projetos</NavLink>
        <NavLink>Sobre mim</NavLink>
        <NavLink>Currículo </NavLink>
        <NavLink>Contato</NavLink>
      </Div2>
    </Container>
  </Section>
);

const Section = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.color.purplebrown};
`;
