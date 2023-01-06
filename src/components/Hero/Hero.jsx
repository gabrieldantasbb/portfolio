import React from "react";
import styled from "styled-components";
import { herobanner } from "../../assets/index";

import {
  Container,
  Div1,
  Div2,
  Div3,
  Div4,
  Img,
  P1,
  P2,
  P3,
  P4,
  Button1,
  Span,
  Text,
  Icon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  FigmaIcon,
  DribbbleIcon
} from "./HeroStyles";
import { NavBar } from "../NavBar/NavBar";

export const Hero = () => (
  <Section>
    <Container>
      <NavBar/>
      <Div1>
        <Div2>
          <Text>
            <P1>
              <Span>Olá!</Span> Eu sou
            </P1>
            <P2>
              <Span>Gabriel Dantas</Span>
            </P2>
            <P3>Desenvolvedor Front-end</P3>
            <P4>Seja bem vindo(a) ao meu site!</P4>
          </Text>
          <Button1>
            <p>SAIBA MAIS</p>
          </Button1>
        </Div2>
        <Div3>
          <Img
            src={herobanner}
            alt="photo of gabriel"
            priority="true"
          />
        </Div3>
      </Div1>
      <Div4>
        <Icon>
          <GithubIcon />
        </Icon>
        <Icon>
          <LinkedinIcon />
        </Icon>
        <Icon>
          <FigmaIcon />
        </Icon>
        <Icon>
          <DribbbleIcon />
        </Icon>
        <Icon>
          <InstagramIcon />
        </Icon>
      </Div4>
    </Container>
  </Section>
);

const Section = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.color.purplebrown};
`;
