import { HiMiniStar } from "react-icons/hi2";
import styled from "styled-components";

export const StyledTestimonials = styled.section`
  border: 1px solid blue;
`;

export const TestimonialsContainer = styled.div`
  margin: 0 auto;
  max-width: 128rem;
  border: 1px solid red;

  height: 96rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Heading = styled.h2`
  color: black;
  text-align: center;
  font-weight: 600;
  max-width: 64rem;
  font-size: 5.6rem;
  margin-bottom: 3.2rem;
  line-height: 6.4rem;
`;

export const Subheading = styled.p`
  color: gray;
  max-width: 72rem;
  font-weight: 400;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 9.6rem;
`;

export const TestimonialsCards = styled.div`
  grid-row-gap: 9.6rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  margin-bottom: 2.4rem;
`;

export const Star = styled.div`
  svg {
    width: 2rem;
    height: 2rem;
    color: var(--primary-color);
  }
`;

export const TestimonialText = styled.p`
  color: black;
  max-width: 40rem;
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2.4rem;
`;

export const TestimonialAvatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 4rem;
`;

export const TestimonialName = styled.p`
  color: gray;
  font-weight: 500;
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1.6rem;
`;
