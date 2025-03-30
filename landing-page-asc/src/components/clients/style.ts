import styled from "styled-components";

export const StyledClients = styled.section`
  background-color: white;
`;

export const ClientsContainer = styled.div`
  width: 128rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  height: 80rem;

  svg {
    width: 5rem;
    height: 5rem;
    color: var(--bg-color);
    animation: move 2000ms ease-in-out infinite;

    @keyframes move {
      from {
        opacity: 0;
        transform: translateX(1.6rem);
      }
      to {
        opacity: 100%;
        transform: translate(0);
      }
    }
  }
`;

export const Heading = styled.h2`
  color: black;
  text-align: center;
  font-weight: 600;
  max-width: 48rem;
  font-size: 3.2rem;
  margin-bottom: 8rem;
  line-height: 4.8rem;
`;

export const Subheading = styled.p`
  color: #565656;
  max-width: 72rem;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 8rem;
`;

export const LogosWrapper = styled.div`
  max-width: 96rem;
  margin-bottom: 6.4rem;
`;

export const LogoElement = styled.article`
  gap: 1.2rem;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`;

export const ClientLogo = styled.div`
  img {
    width: 12rem;
    height: 12rem;
    border-radius: 8rem;
  }
`;

export const ClientName = styled.p`
  color: #565656;
  max-width: 12rem;
  font-weight: 500;
  font-size: 1.2rem;
`;
