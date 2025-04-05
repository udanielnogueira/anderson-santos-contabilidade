import styled from "styled-components";

export const StyledAbout = styled.section``;

export const AboutContainer = styled.div`
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
  margin-bottom: 12rem;
`;

export const TextImageWrapper = styled.div`
  gap: 8rem;
  display: flex;

  img {
    height: 50rem;
    width: auto;
    border-radius: 0.8rem;
  }
`;

export const AboutText = styled.p`
  /* width: 80rem; */
  font-size: 2.4rem;
  font-weight: 400;
  color: var(--dark-main);
  text-align: justify;
`;
