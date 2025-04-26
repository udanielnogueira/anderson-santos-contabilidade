"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Heading,
  CardText,
  CardImage,
  CardTitle,
  Subheading,
  SpecialsCard,
  SpecialsCards,
  StyledSpecials,
  SpecialsContainer,
} from "./style";

import { useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { LuMonitorCheck } from "react-icons/lu";
import { MdOutlineChurch } from "react-icons/md";
import { RiFilePaperLine, RiScissorsFill } from "react-icons/ri";

export const Specials = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1500,
    });
  }, []);

  return (
    <StyledSpecials id="specials">
      <SpecialsContainer>
        <div data-aos="fade-up" className="headingSubheadingContainer">
          <BsStars className="stars" />
          <Heading>Nossa Especialidade: Terceiro Setor</Heading>
          <Subheading>
            Com as nossas soluções, você entrega a burocracia para quem entende
            e otimiza seu tempo para focar no que realmente importa, a
            finalidade da sua organização!
          </Subheading>
        </div>
        <SpecialsCards data-aos="fade-up" data-aos-delay="500">
          <SpecialsCard>
            {/* <div className="imageTitleContainer"> */}
            <CardImage>
              <MdOutlineChurch />
            </CardImage>
            <CardTitle>Conformidade Adequada</CardTitle>
            {/* </div> */}
            <CardText>
              Nós oferecemos uma gestão contábil completa para o Terceiro Setor,
              seguindo normas como a ITG 2002 e MROSC. Elaboramos demonstrações,
              relatórios e prestações de contas. Assegurando transparência e
              conformidade legal.
            </CardText>
          </SpecialsCard>

          <SpecialsCard className="marginTop">
            {/* <div className="imageTitleContainer"> */}
            <CardImage>
              <RiFilePaperLine />
            </CardImage>
            <CardTitle>Certificados e Isenções</CardTitle>
            {/* </div> */}
            <CardText>
              Fazemos o processo de obtenção de certificados importantes como o
              CEBAS, OSCIP e outros. Também damos entrada em pedidos de isenções
              e imunidades tributárias, como isenções de IPTU, de ICMS e da taxa
              de Bombeiros.
            </CardText>
          </SpecialsCard>

          <SpecialsCard>
            {/* <div className="imageTitleContainer"> */}
            <CardImage>
              <LuMonitorCheck />
            </CardImage>
            <CardTitle>Legalização Completa</CardTitle>
            {/* </div> */}
            <CardText>
              Nós Realizamos abertura, baixa e regularização de CNPJ. Elaboramos
              as Atas e Estatutos de forma personalizada. Damos entrada no
              Cartório de Registro, na Receita Federal e também acompanhamos
              todo o processo.
            </CardText>
          </SpecialsCard>

          <SpecialsCard className="marginTop">
            {/* <div className="imageTitleContainer"> */}
            <CardImage>
              <RiScissorsFill />
            </CardImage>
            <CardTitle>Assistente de Tesouraria</CardTitle>
            {/* </div> */}
            <CardText>
              Oferecemos serviços de terceirização das tarefas de Tesouraria,
              para que o tesoureiro tenha mais suporte na gestão de suas rotinas
              e elaboração dos relatórios internos com indicadores. Gerando
              assim, um processo otimizado.
            </CardText>
          </SpecialsCard>
        </SpecialsCards>
      </SpecialsContainer>
    </StyledSpecials>
  );
};
