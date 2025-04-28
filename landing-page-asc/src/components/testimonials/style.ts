import styled from "styled-components";
import { HiMiniStar } from "react-icons/hi2";

export const StyledTestimonials = styled.section`
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--primary-color);
    --swiper-navigation-size: 3.2rem;
  }

  @media screen and (max-width: 1080px) {
    .swiper-button-next,
    .swiper-button-prev {
      color: transparent;
    }
  }
`;

export const TestimonialsContainer = styled.div`
  /* height: 75vh; */
  margin: 0 auto;
  max-width: 128rem;
  padding-top: 8rem;
  padding-bottom: 8rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1080px) {
    height: auto;
    max-width: 36rem;
  }
`;

export const Heading = styled.h2`
  max-width: 72rem;
  margin-bottom: 2.4rem;

  font-weight: 600;
  font-size: 5.6rem;
  text-align: center;
  line-height: 6.4rem;
  color: var(--white-main);

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
  font-weight: 300;
  text-align: center;
  color: var(--white-sub);

  @media only screen and (max-width: 1320px) {
    margin: 0 auto;
    max-width: 30rem;
    margin-bottom: 4rem;

    line-height: 2.4rem;
  }
`;

export const TestimonialsCards = styled.div`
  width: 50%;

  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1080px) {
    width: 90%;
  }
`;

export const TestimonialCard = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const FiveStarsContainer = styled.div`
  margin-bottom: 1.2rem;

  gap: 0.8rem;
  display: flex;
`;

export const Star = styled(HiMiniStar)`
  width: 2rem;
  height: 2rem;

  color: var(--primary-color);
`;

export const TestimonialText = styled.p`
  max-width: 52rem;
  margin-bottom: 1.2rem;

  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  color: var(--white-main);

  @media only screen and (max-width: 1080px) {
    font-size: 1.6rem;
  }
`;

export const PersonContainer = styled.div`
  gap: 0.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TestimonialAvatar = styled.div`
  img {
    width: 5.6rem;
    height: 5.6rem;
    margin-bottom: 1.2rem;

    padding: 0.2rem;
    border-radius: 4rem;
    border: 0.24rem solid var(--primary-color);
  }
`;

export const TestimonialName = styled.p`
  font-weight: 300;
  font-size: 1.6rem;
  text-align: center;
  color: var(--white-sub);

  @media screen and (max-width: 1080px) {
    max-width: 22rem;
  }
`;
