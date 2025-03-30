"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper/modules";

import "swiper/css";

import Image from "next/image";
import igrejaLivres from "./assets/igreja-livres-oficial.webp";
import igrejaPresbiterianaTomazCoelho from "./assets/igreja-presbiteriana-tomaz-coelho.webp";
import igrejaPresbiterianaPiedade from "./assets/igreja-presbiteriana-piedade.webp";
import igrejaPresbiterianaMadureira from "./assets/igreja-presbiteriana-madureira.webp";
import institutoEduAraujoDutra from "./assets/instituto-edu-araujo-dutra.webp";
import institutoSara from "./assets/instituto-sara.webp";

import {
  StyledClients,
  ClientsContainer,
  ClientLogo,
  Subheading,
  Heading,
  LogosWrapper,
  ClientName,
  LogoElement,
} from "./style";
import { PiHandSwipeRight } from "react-icons/pi";
import { useEffect } from "react";

export const Clients: React.FC = () => {
  const clients = [
    { logo: igrejaLivres, alt: "Logo da Igreja Livres", name: "Igreja Livres" },
    {
      logo: institutoSara,
      alt: "Logo do Instituto Sara",
      name: "Instituto Sara",
    },
    {
      logo: igrejaPresbiterianaTomazCoelho,
      alt: "Logo da Igreja Presbiteriana de Tomaz Coelho",
      name: "Igreja Presbiteriana de Tomaz Coelho",
    },
    {
      logo: igrejaPresbiterianaPiedade,
      alt: "Logo da Igreja Presbiteriana de Piedade",
      name: "Igreja Presbiteriana de Piedade",
    },
    {
      logo: igrejaPresbiterianaMadureira,
      alt: "Logo da Igreja Presbiteriana de Madureira",
      name: "Igreja Presbiteriana de Madureira",
    },
    {
      logo: institutoEduAraujoDutra,
      alt: "Logo do Instituto Edu Araújo Dutra",
      name: "Instituto Edu Araújo Dutra",
    },
  ];

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <StyledClients id="clients">
      <ClientsContainer>
        <Heading data-aos="fade-up">
          Alguns dos clientes que aprovam o nosso ótimo trabalho
        </Heading>
        <LogosWrapper data-aos="fade-up" data-aos-delay="500">
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            modules={[Controller, Navigation]}
            pagination={{ clickable: true }}
            navigation
          >
            {clients.map((client, index) => (
              <SwiperSlide>
                <LogoElement key={index}>
                  <ClientLogo>
                    <Image src={client.logo} alt={client.alt}></Image>
                  </ClientLogo>
                  <ClientName>{client.name}</ClientName>
                </LogoElement>
              </SwiperSlide>
            ))}
          </Swiper>
        </LogosWrapper>
        <div data-aos="fade-up" data-aos-delay="500">
          <PiHandSwipeRight />
        </div>
      </ClientsContainer>
    </StyledClients>
  );
};
