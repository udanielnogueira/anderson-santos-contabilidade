"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import professionalPicture from "./assets/professional-picture.jpg";

import {
  AboutContainer,
  AboutText,
  Heading,
  StyledAbout,
  Subheading,
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
          <Heading>Conheça um pouco mais da nossa respeitada história</Heading>
          <Subheading>
            +7 anos atuando na contabilidade de maneira exemplar
          </Subheading>
        </div>
        <TextImageWrapper data-aos="fade-up" data-aos-delay="500">
          <Image src={professionalPicture} alt={"Foto profissional"} />
          <AboutText>
            {/*Muitas organizações do Terceiro Setor ainda possuem uma
            contabilidade feita de forma irregular ou análoga às organizações de
            outros setores, é difícil encontrar serviços especializados que
            atendam demandas e exigências de organizações em fins lucrativos.*/}
            {/* Sou o Anderson, contador desde 2018. Graduado pela Unicarioca e
            pós-graduado em Gestão Contábil e Tributária no Terceiro Setor pela
            PUC Minas. Atuo no Terceiro Setor desde 2019, também integro
            comissões que desenvolvem o 3° Setor no Conselho Regional de
            Contabilidade RJ. Fundei um escritório focado em atender
            exclusivamente organizações sem fins lucrativos. E hoje, toda nossa
            carteira de clientes é formada por igrejas, institutos e
            associações. Seguimos comprometidos em oferecer um serviço de alta
            qualidade e personalizado para esse Setor. */}
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
