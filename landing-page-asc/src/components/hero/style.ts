import styled from "styled-components";
import { GoArrowDownRight } from "react-icons/go";

export const StyledHero = styled.section``;

export const HeroContainer = styled.div`
  margin: 0 auto;
  max-width: 128rem;

  height: 80rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Headline = styled.h1`
  color: var(--white-main);
  text-align: center;
  font-weight: 700;
  font-size: 6.4rem;
  max-width: 88rem;
  line-height: 7.2rem;
  margin-bottom: 1.6rem;
`;

export const Subheadline = styled.p`
  color: var(--white-sub);
  max-width: 72rem;
  font-weight: 300;
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 4.8rem;
`;

export const HeroButtonsContainer = styled.div`
  width: 100%;
  gap: 3.2rem;
  display: flex;
  justify-content: center;
`;

export const HeroButton = styled.a`
  gap: 0.8rem;
  display: flex;
  align-items: center;

  color: var(--dark-sub);
  cursor: pointer;
  font-weight: 600;
  font-size: 1.8rem;
  border-radius: 0rem;
  padding: 1.2rem 3.2rem;
  background-color: var(--white-main);
  transition: 1600ms ease-in-out;

  &:hover {
    text-decoration: underline;
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
  font-weight: 400;
  font-size: 1.8rem;
  border-radius: 0rem;
  padding: 1.2rem 3.2rem;
  background-color: transparent;
  transition: 1600ms ease-in-out;
  border: 0.24rem solid transparent;

  &:hover {
    border: 0.24rem solid var(--white-main);
  }
`;
