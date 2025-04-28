"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import institutoSara from "./assets/instituto-sara.webp";
import igrejaLivres from "./assets/igreja-livres-oficial.webp";
import ministerioMonteHermon from "./assets/ministerio-monte-hermom.webp";
import ipPromocaoDaCidadania from "./assets/ip-promocao-da-cidadania.webp";
import presbiterioDeGuanabara from "./assets/presbiterio-de-guanabara.webp";
import institutoEduAraujoDutra from "./assets/instituto-edu-araujo-dutra.webp";
import igrejaPresbiterianaPiedade from "./assets/igreja-presbiteriana-piedade.webp";
import igrejaPresbiterianaMadureira from "./assets/igreja-presbiteriana-madureira.webp";
import igrejaPresbiterianaThomazCoelho from "./assets/igreja-presbiteriana-thomaz-coelho.webp";

import {
  Heading,
  ClientName,
  ClientLogo,
  Subheading,
  LogoElement,
  LogosWrapper,
  StyledClients,
  ClientsContainer,
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
      <ClientsContainer data-aos="fade-up">
        <div>
          <Heading>Com várias organizações já sendo atendidas</Heading>
          <Subheading>Conheça alguns dos clientes 100% satisfeitos</Subheading>
        </div>
        <LogosWrapper>
          <Swiper
            modules={[Controller, Pagination, Navigation, Scrollbar]}
            slidesPerView={3}
            spaceBetween={0}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            className="swiper"
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
        {/* <div data-aos="fade-up" data-aos-delay="600">
          <PiHandSwipeRight />
        </div> */}
      </ClientsContainer>
    </StyledClients>
  );
};
