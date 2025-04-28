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
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="headingSubheadingContainer"
        >
          <BsStars className="stars" />
          <Heading>Nossa Especialidade: Terceiro Setor</Heading>
          <Subheading>
            Com as nossas soluções, você entrega a burocracia para quem entende
            e otimiza seu tempo para focar no que realmente importa, a
            finalidade da sua organização!
          </Subheading>
        </div>
        <SpecialsCards data-aos="fade-up" data-aos-delay="600">
          <SpecialsCard>
            <CardImage>
              <MdOutlineChurch className="red" />
            </CardImage>
            <CardTitle>Conformidade Adequada</CardTitle>

            <CardText className="text-1">
              Nós oferecemos uma gestão contábil completa para o Terceiro Setor,
              seguindo normas como a ITG 2002 e MROSC. Também elaboramos
              demonstrações, relatórios e prestações de contas. Assegurando
              transparência e conformidade legal.
            </CardText>
          </SpecialsCard>

          <SpecialsCard>
            <CardImage>
              <RiFilePaperLine className="orange" />
            </CardImage>
            <CardTitle>Certificados e Isenções</CardTitle>

            <CardText className="text-2">
              Fazemos o processo de obtenção de certificados importantes como o
              CEBAS, OSCIP e outros. Também damos entrada em pedidos de isenções
              e imunidades tributárias, como as isenções de IPTU, de ICMS e da
              taxa de Bombeiros.
            </CardText>
          </SpecialsCard>

          <SpecialsCard>
            <CardImage>
              <LuMonitorCheck className="violet" />
            </CardImage>
            <CardTitle>Legalização Completa</CardTitle>
            <CardText className="text-3">
              Realizamos abertura, baixa e regularização de CNPJ. Também
              elaboramos Atas e Estatutos de forma personalizada. Damos entrada
              no Cartório de Registro, na Receita Federal e acompanhamos todo
              processo.
            </CardText>
          </SpecialsCard>

          <SpecialsCard>
            <CardImage>
              <RiScissorsFill className="emerald" />
            </CardImage>
            <CardTitle>Assistente de Tesouraria</CardTitle>
            <CardText className="text-4">
              Oferecemos serviços de terceirização das tarefas de Tesouraria,
              para que o tesoureiro tenha mais suporte na gestão de suas rotinas
              e agilidade na elaboração dos relatórios internos com indicadores.
            </CardText>
          </SpecialsCard>
        </SpecialsCards>
      </SpecialsContainer>
    </StyledSpecials>
  );
};
