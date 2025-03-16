import styled from "styled-components";
import { IconType } from "react-icons";
import { ComponentType } from "react";

export const StyledServices = styled.section`
  border: 1px solid blue;
`;

export const ServicesContainer = styled.div`
  margin: 0 auto;
  max-width: 128rem;
  border: 1px solid red;

  height: 96rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ServicesContainerIcon = styled.div`
  animation: moving 1600ms ease-in-out infinite alternate;

  @keyframes moving {
    from {
      transform: translateY(-4rem);
    }
    to {
      transform: translateY(0rem);
    }
  }
  svg {
    width: 6.4rem;
    height: 6.4rem;
    margin-bottom: 2.4rem;
  }
`;

export const Heading = styled.h2`
  color: black;
  text-align: center;
  font-weight: 600;
  max-width: 72rem;
  font-size: 5.6rem;
  margin-bottom: 3.2rem;
  line-height: 6.4rem;
`;

export const Subheading = styled.p`
  color: gray;
  max-width: 72rem;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 8rem;
`;

export const ServicesCards = styled.div`
  grid-row-gap: 9.6rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ServiceCard = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const CardImage = styled.div`
  margin-bottom: 1.6rem;

  svg {
    width: 4rem;
    height: 4rem;
    color: var(--primary-color);
  }
`;

export const CardTitle = styled.h3`
  color: black;
  font-weight: 600;
  font-size: 2.4rem;
  margin-bottom: 1.6rem;
`;

export const CardText = styled.p`
  color: gray;
  text-align: center;
  font-weight: 400;
  font-size: 1.8rem;
  max-width: 32rem;
`;
