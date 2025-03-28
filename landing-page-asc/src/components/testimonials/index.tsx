"use client";

import {
  FiveStarsContainer,
  Heading,
  PersonContainer,
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

// A component that renders five stars
const FiveStars = () => {
  return (
    <FiveStarsContainer>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Star key={index} />
        ))}
    </FiveStarsContainer>
  );
};

export const Testimonials = () => {
  return (
    <StyledTestimonials id="testimonials">
      <TestimonialsContainer>
        <Heading>Clientes satisfeitos com o nosso escritório</Heading>
        <Subheading>Sua melhor escolha contábil é aqui</Subheading>
        <TestimonialsCards>
          <TestimonialCard>
            <TestimonialAvatar
              src="https://github.com/udanielnogueira.png"
              alt="Foto de perfil da pessoa que está dando o depoimento"
            />
            <FiveStars />
            <TestimonialText>
              Há mais de 5 anos sou cliente do escritório e sou muito bem
              auxiliado sempre, tenho relatórios completos e me sinto seguro.
            </TestimonialText>
            <TestimonialName>Daniel Nogueira</TestimonialName>
          </TestimonialCard>

          <TestimonialCard>
            <TestimonialAvatar
              src="https://github.com/udanielnogueira.png"
              alt="Foto de perfil da pessoa que está dando o depoimento"
            />
            <FiveStars />
            <TestimonialText>
              Há mais de 5 anos sou cliente do escritório e sou muito bem
              auxiliado sempre, tenho relatórios completos e me sinto seguro.
            </TestimonialText>
            <TestimonialName>Daniel Nogueira</TestimonialName>
          </TestimonialCard>

          <TestimonialCard>
            <TestimonialAvatar
              src="https://github.com/udanielnogueira.png"
              alt="Foto de perfil da pessoa que está dando o depoimento"
            />
            <FiveStars />
            <TestimonialText>
              Há mais de 5 anos sou cliente do escritório e sou muito bem
              auxiliado sempre, tenho relatórios completos e me sinto seguro.
            </TestimonialText>
            <TestimonialName>Daniel Nogueira</TestimonialName>
          </TestimonialCard>

          <TestimonialCard>
            <TestimonialAvatar
              src="https://github.com/udanielnogueira.png"
              alt="Foto de perfil da pessoa que está dando o depoimento"
            />
            <FiveStars />
            <TestimonialText>
              Há mais de 5 anos sou cliente do escritório e sou muito bem
              auxiliado sempre, tenho relatórios completos e me sinto seguro.
            </TestimonialText>
            <TestimonialName>Daniel Nogueira</TestimonialName>
          </TestimonialCard>
        </TestimonialsCards>
      </TestimonialsContainer>
    </StyledTestimonials>
  );
};
