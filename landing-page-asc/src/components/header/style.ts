import styled from "styled-components";
import { SiHdfcbank } from "react-icons/si";
import { GoArrowDownRight } from "react-icons/go";

export const StyledHeader = styled.header`
  // Fundo semi-transparente
  background: rgba(0, 0, 0, 0.1);

  // Efeito de desfoque
  backdrop-filter: blur(7px);

  // Efeito de desfoque para Safari
  -webkit-backdrop-filter: blur(10px);

  // Sombra suave
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  // Borda suave
  // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const HeaderContainer = styled.nav`
  margin: 0 auto;
  max-width: 128rem;

  height: 7.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1080px) {
    padding: 0 1.2rem;
  }
`;

export const Logo = styled(SiHdfcbank)`
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
  color: var(--white-main);

  // Adjusting to same width of HeaderButton
  margin-right: 14.2rem;
`;

export const ArrowRight = styled(GoArrowDownRight)`
  color: var(--dark-main);
  width: 2.4rem;
  height: 2.4rem;
`;

export const LinkList = styled.ul`
  gap: 3.2rem;
  display: flex;
  justify-content: center;
`;

export const LinkItem = styled.li`
  font-weight: 300;
  font-size: 1.6rem;

  a {
    color: var(--white-main);
    transition: 100ms ease-in-out; // 100ms == 0.1s

    &:hover {
      border-bottom: 0.4rem solid var(--primary-color);
    }
  }

  @media screen and (max-width: 1180px) {
    display: none;
  }
`;

export const HeaderButton = styled.a`
  gap: 0.8rem;
  display: flex;
  align-items: center;

  color: var(--dark-main);
  cursor: pointer;
  font-weight: 600;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  padding: 1.2rem 4rem;
  transition: 400ms ease-in-out;
  background-color: var(--primary-color);

  &:hover {
    padding: 1.2rem 5.6rem;
  }

  @media screen and (max-width: 1080px) {
    padding: 1rem 0.8rem;
  }
`;
