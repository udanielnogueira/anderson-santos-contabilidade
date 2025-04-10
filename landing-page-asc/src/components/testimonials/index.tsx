"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import joaoBatista from "./assets/joao-batista.webp";
import roberioLima from "./assets/roberio-lima.webp";
import fabioQuintanilha from "./assets/fabio-quintanilha.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
      once: false,
      duration: 1500,
    });
  }, []);

  return (
    <StyledTestimonials id="testimonials">
      <TestimonialsContainer>
        <div data-aos="fade-up">
          <Heading>O que estão falando sobre a gente</Heading>
          <Subheading>Depoimentos do escritório</Subheading>
        </div>
        <TestimonialsCards data-aos="fade-up" data-aos-delay="500">
          <Swiper
            modules={[Controller, Pagination, Navigation, Scrollbar]}
            spaceBetween={0}
            slidesPerView={2}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <TestimonialCard>
                <TestimonialAvatar>
                  <Image
                    src={joaoBatista}
                    alt={"Foto de perfil do Reverendo João Batista"}
                  ></Image>
                </TestimonialAvatar>
                <FiveStars />
                <TestimonialText>
                  O escritório exerce seus serviços primando por pontualidade,
                  atendimento personalizado na emissão dos relatórios e
                  constante busca de melhoria, além de um preço bem competitivo
                  no mercado.
                </TestimonialText>
                <TestimonialName>
                  Rev. João Batista da Igreja Presbiteriana de Madureira
                </TestimonialName>
              </TestimonialCard>
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard>
                <TestimonialAvatar>
                  <Image
                    src={fabioQuintanilha}
                    alt={"Foto de perfil do Reverendo Fábio Quintanilha"}
                  ></Image>
                </TestimonialAvatar>
                <FiveStars />
                <TestimonialText>
                  Eficiência, profissionalismo e transparência são as marcas do
                  atendimento do escritório ao Instituto Sara desde o início de
                  nossa parceria. São anos de parceria e o nosso único registro
                  é gratidão!
                </TestimonialText>
                <TestimonialName>
                  Rev. Fábio Quintanilha do Instituto Sara
                </TestimonialName>
              </TestimonialCard>
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard>
                <TestimonialAvatar>
                  <Image
                    src={roberioLima}
                    alt={"Foto de perfil do Reverendo Robério Lima"}
                  ></Image>
                </TestimonialAvatar>
                <FiveStars />
                <TestimonialText>
                  Anderson e sua equipe têm sido muito prestativos e eficientes
                  no atendimento, estamos felizes e satisfeitos com o trabalho
                  realizado e queremos que essa parceria tenha longos anos de
                  duração.
                </TestimonialText>
                <TestimonialName>
                  Rev. Robério Lima da Igreja Presbiteriana de Piedade
                </TestimonialName>
              </TestimonialCard>
            </SwiperSlide>
          </Swiper>
        </TestimonialsCards>
      </TestimonialsContainer>
    </StyledTestimonials>
  );
};
