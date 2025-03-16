"use client";

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

export const Hero = () => {
  return (
    <>
      <StyledHero>
        <HeroContainer>
          <Headline>
            A Contabilidade transparente e responsável que fortalece sua missão
          </Headline>
          <Subheadline>
            Cuidamos de toda a burocracia no nosso escritório, com soluções
            contábeis amigáveis para uma gestão segura e regularizada.
          </Subheadline>
          <HeroButtonsContainer>
            <HeroButton href="#services">Serviços</HeroButton>
            <HeroButtonBordered>
              <ArrowRight />
              Fale conosco
            </HeroButtonBordered>
          </HeroButtonsContainer>
        </HeroContainer>
      </StyledHero>
    </>
  );
};
