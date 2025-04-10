"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import igrejaLivres from "./assets/igreja-livres-oficial.webp";
import igrejaPresbiterianaThomazCoelho from "./assets/igreja-presbiteriana-thomaz-coelho.webp";
import igrejaPresbiterianaPiedade from "./assets/igreja-presbiteriana-piedade.webp";
import igrejaPresbiterianaMadureira from "./assets/igreja-presbiteriana-madureira.webp";
import institutoEduAraujoDutra from "./assets/instituto-edu-araujo-dutra.webp";
import institutoSara from "./assets/instituto-sara.webp";
import presbiterioDeGuanabara from "./assets/presbiterio-de-guanabara.webp";
import ipPromocaoDaCidadania from "./assets/ip-promocao-da-cidadania.webp";
import ministerioMonteHermon from "./assets/ministerio-monte-hermom.webp";

import {
  StyledClients,
  ClientsContainer,
  ClientLogo,
  Heading,
  LogosWrapper,
  ClientName,
  LogoElement,
  Subheading,
} from "./style";
import { useEffect } from "react";

export const Clients: React.FC = () => {
  const clients = [
    {
      logo: igrejaPresbiterianaThomazCoelho,
      alt: "Logo da Igreja Presbiteriana de Thomaz Coelho",
      name: "Igreja Presbiteriana de Thomaz Coelho",
    },
    {
      logo: institutoSara,
      alt: "Logo do Instituto Sara",
      name: "Instituto Sara",
    },
    { logo: igrejaLivres, alt: "Logo da Igreja Livres", name: "Igreja Livres" },
    {
      logo: igrejaPresbiterianaMadureira,
      alt: "Logo da Igreja Presbiteriana de Madureira",
      name: "Igreja Presbiteriana de Madureira",
    },
    {
      logo: igrejaPresbiterianaPiedade,
      alt: "Logo da Igreja Presbiteriana de Piedade",
      name: "Igreja Presbiteriana de Piedade",
    },
    {
      logo: institutoEduAraujoDutra,
      alt: "Logo do Instituto Edu Araújo Dutra",
      name: "Instituto Edu Araújo Dutra",
    },
    {
      logo: ipPromocaoDaCidadania,
      alt: "Logo do Instituto Presbiteriano De Promoção da Cidadania",
      name: "Instituto Presbiteriano de Promoção da Cidadania",
    },
    {
      logo: presbiterioDeGuanabara,
      alt: "Logo do Presbitério de Guanabara",
      name: "Presbitério de Guanabara",
    },
    {
      logo: ministerioMonteHermon,
      alt: "Logo do Ministério Monte Hermon",
      name: "Ministério Monte Hermon",
    },
  ];

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1500,
    });
  }, []);

  return (
    <StyledClients id="clients">
      <ClientsContainer>
        <div data-aos="fade-up">
          <Heading>Várias organizações sendo atendidas</Heading>
          <Subheading>Conheça alguns clientes</Subheading>
        </div>
        <LogosWrapper data-aos="fade-up" data-aos-delay="500">
          <Swiper
            modules={[Controller, Pagination, Navigation, Scrollbar]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
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
        {/* <div data-aos="fade-up" data-aos-delay="500">
          <PiHandSwipeRight />
        </div> */}
      </ClientsContainer>
    </StyledClients>
  );
};
