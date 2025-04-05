import styled from "styled-components";

export const StyledServices = styled.section`
  background-color: white;
`;

export const ServicesContainer = styled.div`
  margin: 0 auto;
  max-width: 128rem;

  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Heading = styled.h2`
  color: var(--blue);
  text-align: center;
  font-weight: 600;
  max-width: 64rem;
  font-size: 5.6rem;
  margin-bottom: 2.4rem;
  line-height: 6.4rem;
`;

export const Subheading = styled.p`
  color: var(--dark-sub);
  max-width: 72rem;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 8rem;
`;

export const ServicesCards = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 3.2rem;
  grid-column-gap: 3.2rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ServiceCard = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* background-color: #fdfdfd; */

  padding: 4.8rem 0;
  border-radius: 1rem;
  transition: 400ms ease-in-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-0.8rem);
  }
`;

export const CardImage = styled.div`
  margin-bottom: 1.6rem;

  svg {
    width: 6.4rem;
    height: 6.4rem;
    color: var(--blue);
    padding: 1.6rem;
    border-radius: 4rem;
    background-color: var(--primary-color);
    text-align: center;
  }
`;

export const CardTitle = styled.h3`
  color: var(--blue);
  font-weight: 600;
  font-size: 2.4rem;
  margin-bottom: 1.6rem;
`;

export const CardText = styled.p`
  color: var(--dark-sub);
  text-align: center;
  font-weight: 400;
  font-size: 1.8rem;
  max-width: 34rem;
`;
