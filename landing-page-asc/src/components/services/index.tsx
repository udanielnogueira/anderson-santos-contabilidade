"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import { TbReportMoney } from "react-icons/tb";
import {
  CardImage,
  CardText,
  CardTitle,
  Heading,
  ServiceCard,
  ServicesCards,
  ServicesContainer,
  StyledServices,
  Subheading,
  ServicesContainerIcon,
} from "./style";
import { FaRegMoneyBillAlt } from "react-icons/fa";

import {
  MdKeyboardDoubleArrowDown,
  MdPersonOutline,
  MdWorkspacesOutline,
} from "react-icons/md";
import { LuGlasses } from "react-icons/lu";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { useEffect } from "react";

export const Services = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1500,
    });
  }, []);

  return (
    <StyledServices id="services">
      <ServicesContainer>
        <ServicesContainerIcon
          href="#services"
          aria-label="Conheça os nossos serviços"
        >
          <MdKeyboardDoubleArrowDown />
        </ServicesContainerIcon>
        <div data-aos="fade-up">
          <Heading>Confira os serviços do nosso escritório</Heading>
          <Subheading>Praticidade e confiança na sua gestão</Subheading>
        </div>
        <ServicesCards data-aos="fade-up" data-aos-delay="550">
          <ServiceCard>
            <CardImage>
              <FaRegMoneyBillAlt />
            </CardImage>
            <CardTitle>Contabilidade Geral</CardTitle>
            <CardText>
              Escrituração contábil completa, com elaboração de balanços e
              relatórios.
            </CardText>
          </ServiceCard>

          <ServiceCard>
            <CardImage>
              <TbReportMoney />
            </CardImage>
            <CardTitle>Departamento Fiscal e Tributário</CardTitle>
            <CardText>
              Apuração de impostos, planejamento tributário e obrigações
              acessórias.
            </CardText>
          </ServiceCard>

          <ServiceCard>
            <CardImage>
              <MdPersonOutline />
            </CardImage>
            <CardTitle>Setor Pessoal e Trabalhista</CardTitle>
            <CardText>
              Folha de pagamento, encargos sociais e as demais normas
              trabalhistas.
            </CardText>
          </ServiceCard>

          <ServiceCard>
            <CardImage>
              <LuGlasses />
            </CardImage>
            <CardTitle>Consultoria e Acessoria</CardTitle>
            <CardText>
              Acessoria contábil e fiscal completa, esteja atualizado com a
              legislação.
            </CardText>
          </ServiceCard>

          <ServiceCard>
            <CardImage>
              <MdWorkspacesOutline />
            </CardImage>
            <CardTitle>Serviços Avulsos</CardTitle>
            <CardText>
              Abertura e baixa de organizações, elaboração de atas e estatutos.
            </CardText>
          </ServiceCard>

          <ServiceCard>
            <CardImage>
              <PiSuitcaseSimpleBold />
            </CardImage>
            <CardTitle>Mais serviços</CardTitle>
            <CardText>
              Entrega de declaração de IR, cadastro em certificações e outros.
            </CardText>
          </ServiceCard>
        </ServicesCards>
      </ServicesContainer>
    </StyledServices>
  );
};
