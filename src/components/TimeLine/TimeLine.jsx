import React from "react";
import { workstation } from "../../constants";
import {
  Container,
  Description,
  Div1,
  Div2,
  Div3,
  Div4,
  H2,
  H3,
  Img,
  LinePoint,
  Section,
  Subtitle,
  Title,
} from "./TimeLineStyles";
import { studyline, jobline } from "../../assets";

export const TimeLine = () => {
  return (
    <Section>
      <Container>
        <Div1>
          <Title>CURRÍCULO</Title>
          <Subtitle>
            Minhas experiências profissionais <br />e estudos até aqui...
          </Subtitle>
        </Div1>
        <Div2>
          {workstation.map((nav, index) => (
            <LinePoint key={index}>
              <Div3>
                <H3>{nav.title}</H3>
                <H2>{nav.duration}</H2>
              </Div3>
                <Img 
                src={jobline}
                alt='line point'
                />
              <Div4>
                <H3>{nav.institution}</H3>
                <Description>{nav.description}</Description>
              </Div4>
            </LinePoint>
          ))}
        </Div2>
      </Container>
    </Section>
  );
};
