import styled from "styled-components";

export const StyledSpecials = styled.section`
  background-color: white;
`;

export const SpecialsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 128rem;
  padding-top: 8rem;
  padding-bottom: 8rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .headingSubheadingContainer {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .stars {
    width: 4.8rem;
    height: 4.8rem;
    color: var(--blue);
    margin-bottom: 2.4rem;
    animation: spin 2400ms ease-in-out alternate-reverse infinite;

    @keyframes spin {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    height: auto;
    padding-bottom: 0rem;
  }
`;

export const Heading = styled.h2`
  max-width: 64rem;
  margin-bottom: 2.4rem;

  font-weight: 600;
  font-size: 5.6rem;
  text-align: center;
  color: var(--blue);
  line-height: 6.4rem;

  .small {
    font-size: 4.8rem;
  }

  @media only screen and (max-width: 1080px) {
    max-width: 36.5rem;

    font-size: 4rem;
    line-height: 4.3rem;

    .small {
      font-size: 3.2rem;
    }
  }
`;

export const Subheading = styled.p`
  max-width: 73rem;
  margin-bottom: 4.8rem;

  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  color: var(--dark-sub);

  @media only screen and (max-width: 1080px) {
    margin: 0 auto;
    max-width: 36.5rem;
    margin-bottom: 4rem;

    line-height: 2.4rem;
  }
`;

export const SpecialsCards = styled.div`
  gap: 3.2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .imageTitleContainer {
    gap: 1.6rem;
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 1080px) {
    gap: 2.4rem;
    max-width: 36rem;
  }
`;

export const SpecialsCard = styled.article`
  width: 56rem;
  height: 28rem;
  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-radius: 1rem;
  transition: 400ms ease-in-out;
  border: 2px solid var(--white-sub);

  &:hover {
    transform: translateY(-0.8rem);
  }

  @media only screen and (max-width: 1080px) {
    width: 100%;
    height: auto;
  }

  .text-1 {
    @media only screen and (max-width: 1080px) {
      word-spacing: -0.15em;
    }
  }

  .text-2 {
    @media only screen and (max-width: 1080px) {
      word-spacing: -0.15em;
    }
  }

  .text-3 {
    @media only screen and (max-width: 1080px) {
      word-spacing: -0.05em;
    }
  }

  .text-4 {
    @media only screen and (max-width: 1080px) {
      word-spacing: -0.05em;
    }
  }
`;

export const CardImage = styled.div`
  margin-bottom: 1.6rem;

  svg {
    width: 5.6rem;
    height: 5.6rem;
    padding: 1.2rem;

    text-align: center;
    border-radius: 8px;
  }

  .emerald {
    color: oklch(76.5% 0.177 163.223); // emerald 400
    background-color: oklch(95% 0.052 163.051); // emerald 100
  }

  .violet {
    color: oklch(70.2% 0.183 293.541); // violet 400
    background-color: oklch(94.3% 0.029 294.588); // violet 100
  }

  .orange {
    color: oklch(75% 0.183 55.934); // orange 400
    background-color: oklch(95.4% 0.038 75.164); // orange 100
  }

  .red {
    color: oklch(70.4% 0.191 22.216); // red 400
    background-color: oklch(93.6% 0.032 17.717); // red 100
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
`;
