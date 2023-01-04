import Image from "next/image";
import styled from "styled-components";
import { Button } from "../../Layouts/layout";

import { CgFigma } from "react-icons/cg";
import { BsInstagram, BsGithub, BsLinkedin, BsDribbble, BsLink } from "react-icons/bs";

export const Container = styled.div`
  max-width: 1280px;
  height: 100vh;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding-top: 2rem;
  padding-bottom: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column-reverse;
    margin-top: 1rem;
    gap: 1rem;
  }
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

export const Text = styled.div`
  padding-bottom: 1rem;
`;

export const P1 = styled.p`
  font-size: 49px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 29px;
  }
`;

export const P2 = styled.p`
  font-size: 55px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 41.5px;
  }
`;

export const P3 = styled.p`
  font-size: 32px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
  }
`;

export const P4 = styled.p`
  font-size: 26px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.color.orangelight};
`;

export const Button1 = styled(Button)`
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 117px;
    height: 42px;
    border: 3px solid #ffffff;
    font-size: 12px;
  }
`;

export const Div3 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const Div4 = styled.div`
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints} {
  }
`;

export const Img = styled(Image)`
  max-width: 100%;
  height: 100%;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 25px;
    height: 25px;
    font-size: 25px;
  }
`;

export const GithubIcon = styled(BsGithub)`
  font-size: 40px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
  }
`;

export const InstagramIcon = styled(BsInstagram)`
  font-size: 40px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
  }
`;

export const LinkedinIcon = styled(BsLinkedin)`
  font-size: 40px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
  }
`;

export const DribbbleIcon = styled(BsDribbble)`
  font-size: 40px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
  }
`;

export const FigmaIcon = styled(CgFigma)`
  font-size: 40px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 30px;
  }
`;