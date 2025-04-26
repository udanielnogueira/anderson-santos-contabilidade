import styled from "styled-components";

export const StyledServices = styled.section`
  background-color: white;
`;

export const ServicesContainer = styled.div`
  width: 100%;
  height: 105vh;
  margin: 0 auto;
  max-width: 128rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1080px) {
    height: auto;
    max-width: 36rem;
  }
`;

export const Heading = styled.h2`
  max-width: 80rem;
  margin-bottom: 2.4rem;

  font-weight: 600;
  font-size: 5.6rem;
  color: var(--blue);
  text-align: center;
  line-height: 6.4rem;

  @media only screen and (max-width: 1080px) {
    max-width: 35rem;

    font-size: 4rem;
    line-height: 4.3rem;
  }
`;

export const Subheading = styled.p`
  max-width: 72rem;
  margin-bottom: 4.8rem;

  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  color: var(--dark-sub);

  @media only screen and (max-width: 1080px) {
    margin: 0 auto;
    max-width: 24rem;
    margin-bottom: 4rem;

    line-height: 2.4rem;
  }
`;

export const ServicesCards = styled.div`
  gap: 3.2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1080px) {
    gap: 2.4rem;
  }
`;

export const ServiceCard = styled.article`
  width: 48rem;
  height: 32rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 3.2rem;
  border-radius: 1rem;
  transition: 400ms ease-in-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-0.8rem);
  }

  @media only screen and (max-width: 1080px) {
    width: 100%;
    height: auto;
  }
`;

export const CardImage = styled.div`
  margin-bottom: 1.6rem;

  svg {
    width: 6.4rem;
    height: 6.4rem;

    padding: 1.6rem;
    color: var(--blue);
    text-align: center;
    border-radius: 0.4rem;
    background-color: var(--primary-color);
  }
`;

export const CardTitle = styled.h3`
  margin-bottom: 1.6rem;

  font-weight: 600;
  font-size: 2.4rem;
  color: var(--blue);

  @media only screen and (max-width: 1080px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  text-align: justify;
  color: var(--dark-sub);

  hyphens: auto;
  -webkit-hyphens: auto;
  word-spacing: -0.05em;
  /* word-break: break-all; */

  @media only screen and (max-width: 1080px) {
    word-spacing: -0.15em;
  }
`;
