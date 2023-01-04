import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  color: white;
  padding-top: 0.2rem;
  padding-bottom: 1rem;
`;

export const Div1 = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
`;

export const Div2 = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  gap: 62px;
`;

export const Li = styled.li`
  list-style: none;
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;
