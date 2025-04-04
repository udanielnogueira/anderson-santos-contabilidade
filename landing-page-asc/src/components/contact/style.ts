import styled from "styled-components";

export const StyledContact = styled.section`
  padding-bottom: 4.8rem;
`;

export const ContactContainer = styled.div`
  margin: 0 auto;
  max-width: 128rem;

  height: 24rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ContactTitle = styled.div`
  display: flex;
  margin-bottom: 4rem;
  align-items: center;
  justify-content: center;
`;

export const ContactIcon = styled.a`
  svg {
    width: 3.2rem;
    height: 3.2rem;
    margin-top: 0.8rem;
    color: var(--white-sub);
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
`;

export const ContactTitleText = styled.h2`
  font-weight: 500;
  font-size: 3.2rem;
  text-align: center;
  color: var(--white-main);
`;

export const ContactElementsWrapper = styled.div`
  gap: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  }
`;

export const ContactInformation = styled.p`
  font-weight: 300;
  font-size: 1.8rem;
`;
