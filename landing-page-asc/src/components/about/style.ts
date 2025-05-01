import styled from "styled-components";

export const StyledAbout = styled.section`
  background-color: var(--white-bg);
`;

export const AboutContainer = styled.div`
  /* height: 100vh; */
  margin: 0 auto;
  max-width: 128rem;
  padding-top: 8rem;
  padding-bottom: 8rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  iframe {
    width: 100%;
    height: 70.2rem;
    padding: 0 1.6rem;
    margin-bottom: 8rem;
  }

  @media only screen and (max-width: 1080px) {
    height: auto;
    max-width: 36rem;
    padding-bottom: 4rem;

    iframe {
      width: 100%;
      height: 19.4rem;
      padding: 0 0.8rem;
      margin-bottom: 4rem;
    }
  }
`;

export const Heading = styled.h2`
  max-width: 60rem;
  margin-bottom: 2.4rem;

  font-weight: 600;
  font-size: 5.6rem;
  color: var(--blue);
  text-align: center;
  line-height: 6.4rem;

  @media only screen and (max-width: 1080px) {
    max-width: 45rem;

    font-size: 4rem;
    line-height: 4.3rem;
  }
`;

export const Subheading = styled.p`
  max-width: 72rem;
  margin-bottom: 8rem;

  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  color: var(--dark-sub);

  @media only screen and (max-width: 1080px) {
    margin: 0 auto;
    max-width: 33rem;
    margin-bottom: 4rem;

    line-height: 2.4rem;
  }
`;

export const TextImageWrapper = styled.div`
  gap: 4.8rem;
  display: flex;

  img {
    width: auto;
    height: 48rem;
    border-radius: 0.8rem;
  }

  @media only screen and (max-width: 1080px) {
    gap: 2.4rem;
    flex-direction: column;

    img {
      width: 100%;
      height: auto;
      border-radius: 0.8rem;
    }
  }
`;

export const AboutText = styled.p`
  font-weight: 400;
  font-size: 2.4rem;
  text-align: justify;
  color: var(--dark-main);

  @media only screen and (max-width: 1080px) {
    font-size: 1.8rem;

    hyphens: auto;
    -webkit-hyphens: auto;
    word-spacing: -0.05em;
    /* word-break: break-all; */
  }
`;
