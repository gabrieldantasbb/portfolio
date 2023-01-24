import Image from "next/image";
import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.color.coal};
  color: white;
`;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.205em;
  color: ${(props) => props.theme.color.orange};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  text-align: center;
  color: white;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

export const LinePoint = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: center;
`;

export const Div3 = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  text-align: right;
  gap: 0.5rem;
`;

export const H2 = styled.h3`
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
`;

export const Img = styled(Image)`
  height: 250px;
`;

export const Div4 = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  text-align: left;
  gap: 0.5rem;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.205em;
  max-width: 350px;
`;

export const H3 = styled.h3`
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.205em;
  text-transform: uppercase;
`;
