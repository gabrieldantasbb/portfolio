import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Global } from "../../styles/global"

import { Footer } from "../components";

export default function layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <main>{children}</main>
          <Footer />
        </Container>
        <Global />
      </ThemeProvider>
    </>
  );
}

export const Container = styled.div`
  width: 100%;
  margin: auto;
  font-family: ${ props => props.theme.font.poppins };
`;

export const Button = styled.button`
width: 217px;
height: 52px;
border: 4px solid #FFFFFF;
color: #FFFFFF;
font-family: ${ props => props.theme.font.poppins };
border-radius: 10px;
font-weight: 600;
font-size: 19px;
background-color: inherit;
`;

const theme = {
  color: {
    orange: "#FF684F",
    orangelight: "#FF8E49",
    firebrick: "#BD4860",
    purplebrown: "#5D3546",
    coal: "#001C2F",
  },
  font : {
    poppins: "'Poppins', sans-serif"
  }
};