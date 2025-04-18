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
        <div data-aos="fade-up">
          <Heading>Confira os serviços disponíveis</Heading>
          <Subheading>para sua gestão!</Subheading>
        </div>
        <ServicesCards data-aos="fade-up" data-aos-delay="550">
          <ServiceCard>
            <CardImage>
              <FaRegMoneyBillAlt />
            </CardImage>
            <CardTitle>Contabilidade Geral</CardTitle>
            <CardText>
              Mantenha sua organização em dia. Realizamos uma escrituração
              contábil completa, elaborando os balanços e relatórios gerenciais
              essenciais para a tomada de decisões e conformidade legal.
            </CardText>
          </ServiceCard>

          <ServiceCard>
            <CardImage>
              <TbReportMoney />
            </CardImage>
            <CardTitle>Fiscal e Tributário</CardTitle>
            <CardText>
              Otimize sua carga tributária e evite possíveis multas. Cuidamos da
              apuração de impostos, do planejamento tributário estratégico e da
              entrega de todas as declarações e obrigações acessórias.
            </CardText>
          </ServiceCard>

          <ServiceCard>
            <CardImage>
              <MdPersonOutline />
            </CardImage>
            <CardTitle>Departamento Pessoal e Trabalhista</CardTitle>
            <CardText>
              Gestão de Pessoal sem complicações. Processamento da folha de
              pagamento, com todos os cálculos de encargos sociais e garantia de
              conformidade com a Legislação trabalhista.
            </CardText>
          </ServiceCard>

          <ServiceCard>
            <CardImage>
              <LuGlasses />
            </CardImage>
            <CardTitle>Consultoria e Acessoria</CardTitle>
            <CardText>
              Consultoria contábil e finaceira. Com um suporte personalizado
              para otimizar toda sua gestão, reduzir custos e garantir que a sua
              organização esteja atualizada e segura perante a legislação.
            </CardText>
          </ServiceCard>
        </ServicesCards>
      </ServicesContainer>
    </StyledServices>
  );
};
