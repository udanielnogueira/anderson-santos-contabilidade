"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Heading,
  CardText,
  CardTitle,
  CardImage,
  Subheading,
  ServiceCard,
  ServicesCards,
  StyledServices,
  ServicesContainer,
} from "./style";

import { useEffect } from "react";
import { LuGlasses } from "react-icons/lu";
import { TbReportMoney } from "react-icons/tb";
import { MdPersonOutline, MdWorkOutline } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GoPeople } from "react-icons/go";

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
          <Heading>
            Confira os serviços disponíveis aqui no nosso escritório
          </Heading>
          <Subheading>
            Uma gestão eficiente e contabilidade responsável
          </Subheading>
        </div>
        <ServicesCards data-aos="fade-up" data-aos-delay="600">
          <ServiceCard>
            <CardImage>
              <FaRegMoneyBillAlt className="emerald" />
            </CardImage>
            <CardTitle>Contabilidade Geral</CardTitle>
            <CardText>
              Mantenha sua organização em dia. Realizamos uma escrituração
              contábil completa, elaborando balanços e relatórios gerenciais
              essenciais para a tomada de decisão e conformidade legal.
            </CardText>
          </ServiceCard>

          <ServiceCard>
            <CardImage>
              <TbReportMoney className="violet" />
            </CardImage>
            <CardTitle>Fiscal e Tributário</CardTitle>
            <CardText>
              Otimize toda sua carga tributária e evite multas. Cuidamos da
              apuração dos impostos, do planejamento tributário e da entrega de
              declarações e obrigações acessórias.
            </CardText>
          </ServiceCard>

          <ServiceCard className="longer">
            <CardImage>
              <MdPersonOutline className="orange" />
            </CardImage>
            <CardTitle>Departamento Pessoal e Trabalhista</CardTitle>
            <CardText>
              Realizamos toda a gestão do Departamento Pessoal sem complicação.
              Com processamento da folha de pagamento, cálculos de encargos
              sociais e garantia de conformidade com a Legislação Trabalhista.
            </CardText>
          </ServiceCard>

          <ServiceCard>
            <CardImage>
              <LuGlasses className="red" />
            </CardImage>
            <CardTitle>Consultoria e Acessoria</CardTitle>
            <CardText>
              Receba uma consultoria contábil e finaceira. Com suporte
              personalizado para otimizar sua gestão, reduzir custos e garantir
              uma organização atualizada e segura mediante a Legislação.
            </CardText>
          </ServiceCard>
        </ServicesCards>
      </ServicesContainer>
    </StyledServices>
  );
};
