import styled from "styled-components";

export const StyledContact = styled.section`
  padding-bottom: 4.8rem;
`;

export const ContactContainer = styled.div`
  margin: 0 auto;
  max-width: 128rem;
  /* height: 80vh; */
  padding-top: 8rem;
  padding-bottom: 8rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1080px) {
    padding-bottom: 1.6rem;
  }
`;

export const ContactTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactTitleText = styled.h2`
  font-weight: 600;
  font-size: 5.6rem;
  text-align: center;
  color: var(--white-main);
  margin-bottom: 2.4rem;

  @media only screen and (max-width: 1320px) {
    max-width: 26rem;

    font-size: 4rem;
    line-height: 4.3rem;
  }
`;

export const Subheading = styled.p`
  color: var(--white-sub);
  max-width: 72rem;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 8rem;

  @media only screen and (max-width: 1320px) {
    display: none;
  }
`;

export const ContactIcon = styled.a`
  svg {
    width: 4rem;
    height: 4rem;
    margin-top: -1.2rem;
    color: var(--primary-color);
    animation: sliding 2000ms ease-in-out infinite;

    @keyframes sliding {
      from {
        opacity: 0;
        transform: translateX(0rem);
      }
      to {
        opacity: 100%;
        transform: translateX(1.6rem);
      }
    }
  }

  @media only screen and (max-width: 1320px) {
    display: none;
  }
`;

export const ContactElementsWrapper = styled.div`
  gap: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1080px) {
    gap: 1.6rem;
    flex-direction: column;
  }
`;

export const ContactElement = styled.a`
  gap: 0.8rem;
  color: var(--white-main);
  display: flex;
  align-items: center;

  svg {
    display: flex;
    width: 3.2rem;
    height: 3.2rem;
    color: var(--primary-color);
  }
`;

export const ContactInformation = styled.p`
  font-weight: 300;
  font-size: 1.8rem;
`;
