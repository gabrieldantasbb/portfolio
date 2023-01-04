import styled from "styled-components";

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
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-top: 3rem;
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
  font-size: ${(props) => props.fontSize};
`;

export const P2 = styled.p`
  font-size: 59px;
`;

export const P3 = styled.p`
  font-size: 59px;
`;

export const Span = styled.span`
  color: ${(props) => props.theme.color.orangelight};
`;

export const Div3 = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 10rem;
  margin-bottom: 2rem;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.75);;
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
  }
`;
