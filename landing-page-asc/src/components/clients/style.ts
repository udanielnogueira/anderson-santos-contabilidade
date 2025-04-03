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
    color: var(--dark-sub);
    animation: move 1600ms ease-in-out infinite;

    @keyframes move {
      from {
        opacity: 0;
        transform: translateX(3.2rem);
      }
      to {
        opacity: 100%;
        transform: translate(-3.2rem);
      }
    }
  }
`;

export const Heading = styled.h2`
  color: var(--dark-main);
  text-align: center;
  font-weight: 600;
  max-width: 60rem;
  font-size: 4rem;
  margin-bottom: 12rem;
  line-height: 5.6rem;
`;

export const LogosWrapper = styled.div`
  cursor: pointer;
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
  color: var(--dark-sub);
  max-width: 14rem;
  font-weight: 500;
  font-size: 1.4rem;
`;
