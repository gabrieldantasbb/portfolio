import React from "react";
import styled from "styled-components";
import { mecat } from "../../assets";
import {
  Button,
  Container,
  Div1,
  Div2,
  Div3,
  Div4,
  H2,
  H3,
  Img1,
  P1,
  P2,
  Perfil,
  PerfilItem,
  ProgressBar,
  Skills,
  Subtitle,
  Title,
} from "./AboutMeStyles";
import { perfil, skills } from "../../constants";

export const AboutMe = () => (
  <Section>
    <Container>
      <Div1>
        <Title>SOBRE MIM</Title>
        <Subtitle>Deixe-me contar um pouco sobre mim...</Subtitle>
      </Div1>
      <Div2>
        <Img1 src={mecat} alt="photo of gabriel and cat" priority="true" />
        <Div3>
          <P1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </P1>
        </Div3>
      </Div2>
      <Div4>
        <Perfil>
          <H2>PERFIL</H2>
          {perfil.map((nav, index) => (
            <PerfilItem id={index}>
              <H3>{nav.title}:</H3>
              <P2>{nav.text}</P2>
            </PerfilItem>
          ))}
          <H2>BAIXAR CURRÍCULO (PDF)</H2>
          <Button>resume</Button>
        </Perfil>
        <Skills>
          <H2>ALGUMAS SKILLS</H2>
          {skills.map((nav, index) => (
            <div id={index}>
              <H3>{nav.title}:</H3>
              <p>{nav.level}</p>
              <ProgressBar max={10} value={nav.level}></ProgressBar>
            </div>
          ))}
          <H2>CONFIRA MINHAS SOFT SKILLS</H2>
          <Button>soft skills</Button>
        </Skills>
      </Div4>
    </Container>
  </Section>
);

const Section = styled.section`
  width: 100%;
  background-color: white;
`;
