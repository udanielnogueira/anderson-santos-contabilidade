import styled from "styled-components";
import { GiSandSnake } from "react-icons/gi";

export const StyledHeader = styled.header`
  background-color: black;
`;

export const HeaderContainer = styled.section`
  margin: 0 auto;
  max-width: 128rem;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(GiSandSnake)`
  width: 5rem;
  height: 5rem;
  color: white;
  cursor: pointer;
`;

export const LinkList = styled.ul`
  gap: 1.6rem;
  display: flex;
  justify-content: center;
`;

export const LinkItem = styled.li`
  font-weight: 300;
  list-style: none;
  font-size: 1.8rem;

  a {
    color: white;
    text-decoration: none;
    transition: 0.4s ease-in-out;

    &:hover {
      color: blue;
    }
  }
`;

export const ContactBtn = styled.a`
  color: white;
  cursor: pointer;
  border-radius: 4rem;
  padding: 0.4rem 2rem;
  background-color: blue;
  transition: 0.4s ease-in-out;

  &:hover {
    color: blue;
    background-color: white;
  }
`;

export const Headline = styled.h2``;

export const Text = styled.p``;

export const Button = styled.button``;
