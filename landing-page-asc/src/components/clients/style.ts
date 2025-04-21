import styled from "styled-components";

export const StyledClients = styled.section`
  background-color: white;
  /* border: 1px solid red; */

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--blue);
    --swiper-navigation-size: 3.2rem;
  }
`;

export const ClientsContainer = styled.div`
  width: 128rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  /* padding-top: 16rem; */

  height: 100vh;

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

  /* border: 1px solid blue; */
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

export const LogosWrapper = styled.div`
  cursor: pointer;
  max-width: 96rem;
  /* margin-bottom: 12rem; */

  .swiper-pagination-bullet-active {
    background-color: var(--blue);
  }
`;

export const LogoElement = styled.article`
  gap: 1.2rem;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;

  /* margin-bottom: 8rem; */
`;

export const ClientLogo = styled.div`
  img {
    width: 12rem;
    height: 12rem;
    border-radius: 8rem;
    /* padding: 0.4rem;
    border: 0.2rem solid var(--blue); */
  }
`;

export const ClientName = styled.p`
  color: var(--dark-sub);
  max-width: 14rem;
  font-weight: 500;
  font-size: 1.4rem;
`;
