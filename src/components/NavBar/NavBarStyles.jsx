import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  position: relative;
  margin: auto;
  display: flex;
  justify-content: space-between;
  color: white;
  padding-top: 0.2rem;
  padding-bottom: 1rem;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 95%;
  }
`;

export const Div1 = styled.div`
  font-weight: 600;
  font-size: 24px;
`;

export const Menu = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    z-index: 1;
  }
`;

export const Img = styled(Image)`
  width: 30px;
  height: 30px;
  filter: invert(100%);
`;

export const MenuBar = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
  display: ${(props) => props.show? 'none' : 'flex'}; 
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  right: -0.7rem;
  top: -0.4rem;
  padding: 2rem;
  padding-top: 4rem;
  background-color: ${(props) => props.theme.color.orangelight};
  border-radius: 20px;
  }
`;

export const Div2 = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 14px;
  gap: 62px;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
    font-size: 12px;
    gap: 14px;
    text-align: right;
  }
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    color: #fff;
    font-size: .9em;
    font-weight: 500;
    text-transform: uppercase;
  }
`;
