import styled from "styled-components";
import { SiHdfcbank } from "react-icons/si";
import { GoArrowDownRight } from "react-icons/go";

export const StyledHeader = styled.header`
  border: 1px solid blue;
`;

export const HeaderContainer = styled.nav`
  margin: 0 auto;
  max-width: 128rem;
  border: 1px solid red;

  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(SiHdfcbank)`
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
  color: var(--primary-color);

  // Adjusting to same width of HeaderButton
  margin-right: 14.2rem;
`;

export const ArrowRight = styled(GoArrowDownRight)`
  color: white;
  width: 2.4rem;
  height: 2.4rem;
`;

export const LinkList = styled.ul`
  gap: 3.2rem;
  display: flex;
  justify-content: center;
`;

export const LinkItem = styled.li`
  font-weight: 500;
  font-size: 1.6rem;

  a {
    color: black;
    transition: 100ms ease-in-out; // 100ms == 0.1s

    &:hover {
      border-bottom: 0.4rem solid var(--primary-color);
    }
  }
`;

export const HeaderButton = styled.a`
  gap: 0.8rem;
  display: flex;
  align-items: center;

  color: white;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.6rem;
  border-radius: 0rem;
  padding: 0.8rem 2.4rem;
  transition: 400ms ease-in-out;
  background-color: var(--primary-color);

  &:hover {
    padding: 0.8rem 4.8rem;
  }
`;
