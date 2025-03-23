import styled from "styled-components";

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

export const ServicesContainerIcon = styled.a`
  animation: moving 1600ms ease-in-out infinite alternate;

  @keyframes moving {
    from {
      transform: translateY(-4rem);
    }
    to {
      transform: translateY(0.4rem);
    }
  }

  svg {
    width: 6.4rem;
    height: 6.4rem;
    color: var(--primary-color);
  }
`;

export const Heading = styled.h2`
  color: black;
  text-align: center;
  font-weight: 600;
  max-width: 72rem;
  font-size: 5.6rem;
  margin-bottom: 2.4rem;
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
  width: 100%;
  display: grid;
  grid-row-gap: 2.4rem;
  grid-column-gap: 2.4rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ServiceCard = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;
  padding: 4.8rem 0;
  border-radius: 1rem;
  transition: 400ms ease-in-out;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-0.8rem);
  }
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
