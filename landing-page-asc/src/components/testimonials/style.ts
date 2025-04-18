import { HiMiniStar } from "react-icons/hi2";
import styled from "styled-components";

export const StyledTestimonials = styled.section`
  /* border: 1px solid red; */

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--primary-color);
    --swiper-navigation-size: 3.2rem;
  }
`;

export const TestimonialsContainer = styled.div`
  margin: 0 auto;
  max-width: 128rem;

  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  /* border: 1px solid blue; */
`;

export const Heading = styled.h2`
  color: var(--white-main);
  text-align: center;
  font-weight: 600;
  max-width: 64rem;
  font-size: 5.6rem;
  margin-bottom: 2.4rem;
  line-height: 6.4rem;
`;

export const Subheading = styled.p`
  color: var(--white-sub);
  max-width: 72rem;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 12rem;
`;

export const TestimonialsCards = styled.div`
  width: 100%;

  /* column-gap: 16rem; */
  /* row-gap: 8rem; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
`;

export const TestimonialCard = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const FiveStarsContainer = styled.div`
  gap: 0.8rem;
  display: flex;
  margin-bottom: 1.2rem;
`;

export const Star = styled(HiMiniStar)`
  width: 2rem;
  height: 2rem;
  color: var(--primary-color);
`;

export const TestimonialText = styled.p`
  color: var(--white-main);
  max-width: 50rem;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.2rem;
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
    padding: 0.2rem;
    margin-bottom: 1.2rem;
    border-radius: 4rem;
    border: 0.24rem solid var(--primary-color);
  }
`;

export const TestimonialName = styled.p`
  color: var(--white-sub);
  font-weight: 300;
  font-size: 1.6rem;
  text-align: center;
`;
