import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1208px;
  width: 100%;
  margin: auto;
  padding: 3rem 1rem 7rem 1rem;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem 1rem 2rem 1rem;
  }
`;

export const Div1 = styled.div`
  width: 100%;
  justify-content: center;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.205em;
  color: ${(props) => props.theme.color.purplebrown};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  text-align: center;
  color: ${(props) => props.theme.color.coal};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;

export const Div2 = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const Img1 = styled(Image)`
margin-top: 1rem;
`;

export const Div3 = styled.div`
  max-width: 500px;
  width: 100%;
  align-items: center;
`;

export const P1 = styled.p`
  font-size: medium;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
  }
`;

export const Div4 = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-evenly;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const Perfil = styled.div``;

export const PerfilItem = styled.div`
  margin-bottom: 1rem;
`;

export const H2 = styled.h2`
  font-size: 18px;
  color: ${(props) => props.theme.color.coal};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
  }
`;

export const H3 = styled.h3`
  font-weight: 600;
  font-size: 14px;
  margin-top: 1rem;
  letter-spacing: 0.205em;
  color: ${(props) => props.theme.color.coal};
  text-transform: uppercase;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.6em;
  }
`;

export const P2 = styled.p`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.205em;
  color: ${(props) => props.theme.color.coal};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
    width: 90%;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 1rem;
  padding: 2px;
  background: ${(props) => props.theme.color.purplebrown};
  border-radius: 30px;
  border-style: none;
  color: white;
  font-weight: 600;
  letter-spacing: 0.105em;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 120px;
    height: 25px;
    font-size: 11px;
  }
`;

export const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const SkillArea = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  @media ${(props) => props.theme.breakpoints.sm} {
    &:h3 {
      font-size: 19px;
    }
  }
`;

export const Skill = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    &:h3 {
      font-size: 19px;
    }
  }
`;

export const Progressbar = styled.div`
  margin-top: 0.5rem;
  position: relative;
  width: 300px;
  max-width: calc(100% - 1rem);
  height: 1.3em;
  background-color: white;
  border: 2px solid;
  border-color: black;
  border-radius: 1.5em;
  color: white;

  &:before {
    content: "";
    display: flex;
    align-items: center;
    position: absolute;
    left: 0.1em;
    top: 0.1em;
    bottom: 0.1em;
    width: ${(props) => props.level}%;
    min-width: 2em;
    max-width: calc(100% - 0.2em);
    border-radius: 1.5em;
    background-color: ${(props) => props.theme.color.orange};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 150px;
    height: 1em;
    border: 0.1em solid;
    border-color: black;
  }
`;

export const Progress = styled.div`
  display: block;
`;
