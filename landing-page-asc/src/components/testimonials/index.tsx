"use client";

import { HiMiniStar } from "react-icons/hi2";
import {
  FiveStarsContainer,
  Heading,
  Star,
  StyledTestimonials,
  Subheading,
  TestimonialAvatar,
  TestimonialCard,
  TestimonialName,
  TestimonialsCards,
  TestimonialsContainer,
  TestimonialText,
} from "./style";

export const Testimonials = () => {
  const stars = ["s", "s", "s", "s", "s"];
  return (
    <StyledTestimonials id="testimonials">
      <TestimonialsContainer>
        <Heading>Clientes satisfeitos com o nosso escritório</Heading>
        <Subheading>Sua melhor escolha contábel é aqui</Subheading>
        <TestimonialsCards>
          <TestimonialCard>
            <FiveStarsContainer>
              {stars.map((star) => (
                <Star>
                  <HiMiniStar />
                </Star>
              ))}
            </FiveStarsContainer>
            <TestimonialText>
              Há mais de 5 anos sou cliente do escritório e sou muito bem
              auxiliado sempre, tenho relatórios completos e me sinto seguro.
            </TestimonialText>
            <TestimonialName>Daniel Nogueira</TestimonialName>
            <TestimonialAvatar src="https://github.com/udanielnogueira.png" />
          </TestimonialCard>
          <TestimonialCard>
            <FiveStarsContainer>
              {stars.map((star) => (
                <Star>
                  <HiMiniStar />
                </Star>
              ))}
            </FiveStarsContainer>
            <TestimonialText>
              Há mais de 5 anos sou cliente do escritório e sou muito bem
              auxiliado sempre, tenho relatórios completos e me sinto seguro.
            </TestimonialText>
            <TestimonialName>Daniel Nogueira</TestimonialName>
            <TestimonialAvatar src="https://github.com/udanielnogueira.png" />
          </TestimonialCard>
          <TestimonialCard>
            <FiveStarsContainer>
              {stars.map((star) => (
                <Star>
                  <HiMiniStar />
                </Star>
              ))}
            </FiveStarsContainer>
            <TestimonialText>
              Há mais de 5 anos sou cliente do escritório e sou muito bem
              auxiliado sempre, tenho relatórios completos e me sinto seguro.
            </TestimonialText>
            <TestimonialName>Daniel Nogueira</TestimonialName>
            <TestimonialAvatar src="https://github.com/udanielnogueira.png" />
          </TestimonialCard>
          <TestimonialCard>
            <FiveStarsContainer>
              {stars.map((star) => (
                <Star>
                  <HiMiniStar />
                </Star>
              ))}
            </FiveStarsContainer>
            <TestimonialText>
              Há mais de 5 anos sou cliente do escritório e sou muito bem
              auxiliado sempre, tenho relatórios completos e me sinto seguro.
            </TestimonialText>
            <TestimonialName>Daniel Nogueira</TestimonialName>
            <TestimonialAvatar src="https://github.com/udanielnogueira.png" />
          </TestimonialCard>
        </TestimonialsCards>
      </TestimonialsContainer>
    </StyledTestimonials>
  );
};
