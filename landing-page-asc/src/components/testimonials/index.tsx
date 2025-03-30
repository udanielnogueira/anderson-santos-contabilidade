"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import joaoBatista from "./assets/joao-batista.webp";
import fabioQuintanilha from "./assets/fabio-quintanilha.webp";

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
import { useEffect } from "react";

// A component that renders five stars
const FiveStars = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1500,
    });
  }, []);

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
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <StyledTestimonials id="testimonials">
      <TestimonialsContainer>
        <div data-aos="fade-up">
          <Heading>O que estão falando sobre o nosso serviço</Heading>
          <Subheading>Sua melhor escolha contábil é aqui</Subheading>
        </div>
        <TestimonialsCards data-aos="fade-up" data-aos-delay="500">
          <TestimonialCard>
            <TestimonialAvatar>
              <Image
                src={joaoBatista}
                alt={"Foto de perfil da pessoa que está dando o depoimento"}
              ></Image>
            </TestimonialAvatar>
            <FiveStars />
            <TestimonialText>
              O escritório exerce seus serviços primando por pontualidade,
              atendimento personalizado na emissão dos relatórios e constante
              busca de melhoria, além de um preço bem competitivo no mercado.
            </TestimonialText>
            <TestimonialName>
              João Batista da Igreja Presbiteriana de Madureira
            </TestimonialName>
          </TestimonialCard>

          <TestimonialCard>
            <TestimonialAvatar>
              <Image
                src={fabioQuintanilha}
                alt={"Foto de perfil da pessoa que está dando o depoimento"}
              ></Image>
            </TestimonialAvatar>
            <FiveStars />
            <TestimonialText>
              Eficiência, profissionalismo e transparência são as marcas do
              atendimento do escritório ao Instituto Sara desde o início de
              nossa parceria. São anos de parceria e nosso únnico registro é
              gratidão!
            </TestimonialText>
            <TestimonialName>
              Fábio Quintanilha do Instituto Sara
            </TestimonialName>
          </TestimonialCard>
        </TestimonialsCards>
      </TestimonialsContainer>
    </StyledTestimonials>
  );
};
