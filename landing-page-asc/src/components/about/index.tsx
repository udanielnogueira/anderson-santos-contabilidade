"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import professionalPicture from "./assets/professional-picture.jpg";

import {
  Heading,
  AboutText,
  Subheading,
  StyledAbout,
  AboutContainer,
  TextImageWrapper,
} from "./style";
import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1500,
    });
  }, []);

  return (
    <StyledAbout id="about">
      <AboutContainer>
        <div data-aos="fade-up">
          <Heading>Conheça um pouco mais da nossa história</Heading>
          <Subheading>
            +7 anos atuando na contabilidade de maneira exemplar
          </Subheading>
        </div>
        <TextImageWrapper data-aos="fade-up" data-aos-delay="600">
          <Image src={professionalPicture} alt={"Foto profissional"} />
          <AboutText>
            Muitas organizações do Terceiro Setor têm sua contabilidade feita de
            forma irregular ou análoga às organizações de outros setores, o que
            pode causar vários prejuízos pela falta do tratamento adequado.
            Diante da escassez de um serviço especializado para cuidar desse
            nicho, nasce nosso escritório, com a missão de ajudar essas
            organizações. Sou contador desde 2018, graduado pela Unicarioca. No
            Terceiro Setor, atuo desde 2019 e atualmente sou pós-graduado em
            Gestão Contábil e Tributária no Terceiro Setor pela PUC Minas. E por
            fim, também integro comissões da área no Conselho Regional de
            Contabilidade RJ.
          </AboutText>
        </TextImageWrapper>
      </AboutContainer>
    </StyledAbout>
  );
};
