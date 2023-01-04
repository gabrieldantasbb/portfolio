import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { herobanner } from "../../assets/index";
import { Button } from "../../Layouts/layout";
import { CgFigma } from "react-icons/cg";
import { BsInstagram, BsGithub, BsLinkedin, BsDribbble } from "react-icons/bs";

import {
  Container,
  Div1,
  Div2,
  Div3,
  P1,
  Span,
  Text,
  Icon,
} from "./HeroStyles";
import { NavBar } from "../NavBar/NavBar";

const style = { fontSize: "50px" }

export const Hero = () => (
  <Section>
    <Container>
      <NavBar/>
      <Div1>
        <Div2>
          <Text>
            <P1 fontSize="59px">
              <Span>Olá!</Span> Eu sou
            </P1>
            <P1 fontSize="74px">
              <Span>Gabriel Dantas</Span>
            </P1>
            <P1 fontSize="43px">Desenvolvedor Front-end</P1>
            <P1 fontSize="35px">Seja bem vindo(a) ao meu site!</P1>
          </Text>
          <Button>
            <p>SAIBA MAIS</p>
          </Button>
        </Div2>
        <div>
          <Image
            src={herobanner}
            width={514}
            height={478}
            alt="photo of gabriel"
            priority="true"
          />
        </div>
      </Div1>
      <Div3>
        <Icon>
          <BsGithub style={style} />
        </Icon>
        <Icon>
          <BsLinkedin style={style} />
        </Icon>
        <Icon>
          <CgFigma style={style} />
        </Icon>
        <Icon>
          <BsDribbble style={style} />
        </Icon>
        <Icon>
          <BsInstagram style={style} />
        </Icon>
      </Div3>
    </Container>
  </Section>
);

const Section = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.color.purplebrown};
`;
