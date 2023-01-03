import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container, Div1, Div2, P1, Span } from "./HeroStyles";
import { Button } from "../../"
import {herobanner} from "../../assets/index"

export const Hero = () => 
<Section>
 <Container>
  <Div1>
    <Div2>
      <P1 fontSize="59px"><Span>Olá!</Span> Eu sou</P1>
      <P1 fontSize="74px"><Span>Gabriel Dantas</Span></P1> 
      <P1 fontSize="43px">Desenvolvedor Front-end</P1>
      <P1 fontSize="35px">Seja bem vindo(a) ao meu site!</P1>
      <button>SAIBA MAIS</button>
    </Div2>
    <div>
    <Image src={herobanner} width={514} height={478} alt="photo of gabriel" priority="true" />
    </div>
  </Div1>
  <div></div>
 </Container>
</Section>;

const Section = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.color.purplebrown};
`;
