import styled from "styled-components";
import { GoArrowDownRight } from "react-icons/go";

export const StyledHero = styled.section``;

export const HeroContainer = styled.div`
  margin: 0 auto;
  max-width: 128rem;

  height: 95vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1080px) {
    padding-top: 6.4rem;
    padding-bottom: 2rem;
    height: auto;
  }
`;

export const Headline = styled.h1`
  max-width: 87rem;
  font-weight: 700;
  font-size: 6.4rem;
  text-align: center;
  line-height: 7.2rem;
  margin-bottom: 1.6rem;
  color: var(--white-main);

  @media screen and (max-width: 1080px) {
    font-size: 4.8rem;
    line-height: 5.6rem;
    max-width: 54rem;
    /* padding: 0 1rem; */
  }

  @media screen and (max-width: 550px) {
    max-width: 36.5rem;
  }
`;

export const Subheadline = styled.p`
  max-width: 72rem;
  font-weight: 300;
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 4.8rem;
  color: var(--white-sub);

  @media screen and (max-width: 1080px) {
    font-size: 2rem;
    max-width: 37rem;
    margin-bottom: 2.4rem;
  }
`;

export const HeroButtonsContainer = styled.div`
  width: 100%;
  gap: 3.2rem;
  display: flex;
  /* padding-bottom: 3.2rem; */
  justify-content: center;

  @media screen and (max-width: 1080px) {
    gap: 1.6rem;
  }
`;

export const HeroButton = styled.a`
  flex-basis: 0;

  gap: 0.8rem;
  display: flex;
  align-items: center;

  color: var(--dark-main);
  cursor: pointer;
  font-weight: 500;
  font-size: 1.8rem;
  border-radius: 0.4rem;
  padding: 1.2rem 4rem;
  background-color: var(--primary-color);
  transition: 320ms ease-in-out;

  &:hover {
    transform: translateY(-0.8rem);

    /* text-decoration: underline; */
  }

  @media screen and (max-width: 1080px) {
    padding: 1.2rem 2.4rem;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export const ArrowRight = styled(GoArrowDownRight)`
  color: var(--white-main);
  width: 2.4rem;
  height: 2.4rem;
`;

export const HeroButtonBordered = styled.a`
  gap: 0.8rem;
  display: flex;
  align-items: center;

  color: var(--white-main);
  cursor: pointer;
  font-weight: 300;
  font-size: 1.8rem;
  border-radius: 0.4rem;
  padding: 1.2rem 4rem;
  transition: 320ms ease-in-out;
  border: 0.24rem solid transparent;

  // Efeito de desfoque
  backdrop-filter: blur(3px);

  // Fundo semi-transparente
  background: rgba(0, 0, 0, 0.1);

  // Efeito de desfoque para Safari
  -webkit-backdrop-filter: blur(3px);

  // Sombra suave
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-0.8rem);
    border: 0.24rem solid var(--white-sub);
  }

  @media screen and (max-width: 1080px) {
    border: none;
    padding: 1.2rem 2.4rem;
  }
`;

export const ServicesContainerIcon = styled.a`
  animation: moving 1600ms ease-in-out infinite alternate;

  @keyframes moving {
    from {
      transform: translateY(20rem);
    }
    to {
      transform: translateY(1.6rem);
    }
  }

  svg {
    width: 6.4rem;
    height: 6.4rem;
    color: var(--primary-color);
  }

  @media screen and (max-width: 1080px) {
    @keyframes moving {
      from {
        transform: translateY(11rem);
      }
      to {
        transform: translateY(0.8rem);
      }
    }
  }
`;
