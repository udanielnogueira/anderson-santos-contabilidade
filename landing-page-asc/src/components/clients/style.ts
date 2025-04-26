import styled from "styled-components";

export const StyledClients = styled.section`
  background-color: white;

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--blue);
    --swiper-navigation-size: 3.2rem;
  }

  @media only screen and (max-width: 1080px) {
    .swiper-button-next,
    .swiper-button-prev {
      color: transparent;
      --swiper-navigation-size: 1.6rem;
    }
  }
`;

export const ClientsContainer = styled.div`
  height: 100vh;
  width: 128rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  svg {
    width: 5rem;
    height: 5rem;

    color: var(--blue);
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

  @media only screen and (max-width: 1320px) {
    height: auto;
    max-width: 36rem;
  }
`;

export const Heading = styled.h2`
  max-width: 64rem;
  margin-bottom: 2.4rem;

  font-weight: 600;
  font-size: 5.6rem;
  color: var(--blue);
  text-align: center;
  line-height: 6.4rem;

  @media only screen and (max-width: 1320px) {
    max-width: 35rem;

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

  @media only screen and (max-width: 1320px) {
    margin: 0 auto;
    max-width: 24rem;
    margin-bottom: 4rem;

    line-height: 2.4rem;
  }
`;

export const LogosWrapper = styled.div`
  cursor: pointer;
  max-width: 96rem;

  .swiper-pagination-bullet-active {
    background-color: var(--blue);
  }

  @media only screen and (max-width: 1080px) {
    .swiper {
      max-width: 36rem;
    }
  }
`;

export const LogoElement = styled.article`
  gap: 1.2rem;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1080px) {
    gap: 0.4rem;
  }
`;

export const ClientLogo = styled.div`
  img {
    width: 12rem;
    height: 12rem;
    border-radius: 8rem;
  }

  @media only screen and (max-width: 1080px) {
    img {
      width: 8rem;
      height: 8rem;
    }
  }
`;

export const ClientName = styled.p`
  max-width: 14rem;

  font-weight: 500;
  font-size: 1.4rem;
  color: var(--dark-sub);

  @media screen and (max-width: 1080px) {
    font-size: 1.2rem;
  }
`;
