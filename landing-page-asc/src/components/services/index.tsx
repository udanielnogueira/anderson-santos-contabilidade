"use client";

import { TbReportMoney, TbTopologyStar2 } from "react-icons/tb";
import {
  CardImage,
  CardText,
  CardTitle,
  Heading,
  ServiceCard,
  ServiceCards,
  ServiceContainerIcon,
  ServicesContainer,
  StyledServices,
  Subheading,
} from "./style";
import { FaMoneyBill, FaRegMoneyBillAlt } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { MdPersonOutline, MdWorkspacesOutline } from "react-icons/md";
import { LuGlasses } from "react-icons/lu";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

export const Services = () => {
  return (
    <StyledServices id="services">
      <ServicesContainer>
        <ServiceContainerIcon>
          <BsBoxes />
        </ServiceContainerIcon>
        <Heading>Confira os serviços do nosso escritório</Heading>
        <Subheading>Praticidade e confiança para sua gestão</Subheading>
        <ServiceCards>
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
              Entrega de declaração de IR, cadastro em certificações e mais.
            </CardText>
          </ServiceCard>
        </ServiceCards>
      </ServicesContainer>
    </StyledServices>
  );
};
