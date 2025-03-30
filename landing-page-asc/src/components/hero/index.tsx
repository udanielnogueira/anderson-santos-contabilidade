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
} from "./style";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2000,
    });
  }, []);

  return (
    <>
      <StyledHero>
        <HeroContainer data-aos="fade-up">
          <Headline>
            Contabilidade transparente e responsável que fortalece a sua missão
          </Headline>
          <Subheadline>
            Cuidamos de toda a burocracia no nosso escritório, com soluções
            contábeis amigáveis para uma gestão segura e regularizada.
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
        </HeroContainer>
      </StyledHero>
    </>
  );
};
