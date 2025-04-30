"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import background from "./assets/bg-1.jpg";

import {
  HeroButtonsContainer,
  Headline,
  HeroButtonBordered,
  HeroButton,
  HeroContainer,
  StyledHero,
  Subheadline,
  ArrowRight,
  ServicesContainerIcon,
} from "./style";
import { useEffect } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2000,
    });
  }, []);

  return (
    <>
      <StyledHero /*data-aos="fade-up"*/>
        <HeroContainer>
          <Headline>
            Contabilidade transparente e responsável que fortalece sua missão
          </Headline>
          <Subheadline>
            Cuidamos de toda a burocracia no nosso escritório, com as soluções
            contábeis amigáveis pra uma gestão segura e regularizada.
          </Subheadline>
          <HeroButtonsContainer>
            <HeroButton href="#services">Serviços</HeroButton>
            <HeroButtonBordered
              href="https://api.whatsapp.com/send?phone=5521966400919"
              target="blank"
            >
              <ArrowRight />
              Fale conosco
            </HeroButtonBordered>
          </HeroButtonsContainer>
          <ServicesContainerIcon
            href="#services"
            aria-label="Conheça os nossos serviços"
          >
            <MdKeyboardDoubleArrowDown />
          </ServicesContainerIcon>
        </HeroContainer>
      </StyledHero>
    </>
  );
};
