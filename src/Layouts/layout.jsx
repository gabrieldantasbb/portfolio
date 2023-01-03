import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { NavBar, Footer } from "../componets";

export default function layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  margin: auto;
  font-family: ${ props => props.theme.font.poppins };
`;

const Button = styled.button`
width: 217px;
height: 52px;
border: 4px solid #FFFFFF;
border-radius: 10px;
font-weight: 600;
font-size: 19px;
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