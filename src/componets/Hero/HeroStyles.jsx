import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  color: white;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

export const Div1 = styled.div`
display: flex;
width: 100%;
gap: 23px;
`;

export const Div2 = styled.div`
display: flex;
flex-direction: column;
font-weight: 700;
`;

export const P1 = styled.p`
font-size: ${props => props.fontSize};
`;

export const P2 = styled.p`
font-size: 59px;
`;

export const P3 = styled.p`
font-size: 59px;
`;

export const Span = styled.span`
color: ${props => props.theme.color.orangelight}
`;