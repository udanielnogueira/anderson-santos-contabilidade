import styled from "styled-components";

export const StyledSpecials = styled.section`
  background-color: white;
`;

export const SpecialsContainer = styled.div`
  margin: 0 auto;
  max-width: 128rem;

  height: 108vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  /* border: 1px solid blue; */

  .headingSubheadingContainer {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Heading = styled.h2`
  color: var(--blue);
  font-weight: 600;
  max-width: 64rem;
  font-size: 5.6rem;
  margin-bottom: 2.4rem;
  line-height: 6.4rem;
  text-align: center;
`;

export const Subheading = styled.p`
  color: var(--dark-sub);
  max-width: 56rem;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 8rem;
`;

export const SpecialsCards = styled.div`
  /* gap: 9.6rem; */
  width: 100%;
  display: grid;
  grid-row-gap: 3.2rem;
  grid-column-gap: 3.2rem;
  grid-template-columns: 1fr 1fr;

  .imageTitleContainer {
    gap: 2rem;
    display: flex;
    align-items: center;
  }
`;

export const SpecialsCard = styled.article`
  gap: 1.6rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

  border-radius: 1rem;
  transition: 400ms ease-in-out;
  box-shadow: 1px 1px 3.2px rgba(0, 0, 0, 0.1);

  padding: 4rem 4rem;

  /* border: 1px solid red; */

  &:hover {
    transform: translateY(-0.8rem);
  }
`;

export const CardImage = styled.div`
  svg {
    width: 6.4rem;
    height: 6.4rem;
    color: var(--blue);
    padding: 1.6rem;
    border-radius: 0.4rem;
    background-color: var(--primary-color);
    text-align: center;
  }
`;

export const CardTitle = styled.h3`
  color: var(--blue);
  font-weight: 600;
  font-size: 2.4rem;
`;

export const CardText = styled.p`
  color: var(--dark-sub);
  text-align: justify;
  font-weight: 400;
  font-size: 1.8rem;
  /* max-width: 96rem; */
`;
