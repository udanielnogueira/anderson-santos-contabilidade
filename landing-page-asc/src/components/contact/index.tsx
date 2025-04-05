"use client";

import {
  ContactContainer,
  ContactElement,
  ContactElementsWrapper,
  ContactIcon,
  ContactInformation,
  ContactTitle,
  ContactTitleText,
  StyledContact,
  Subheading,
} from "./style";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { PiArrowElbowRightDownLight } from "react-icons/pi";

export const Contact = () => {
  return (
    <StyledContact id="contact">
      <ContactContainer data-aos="fade-up" data-aos-delay="500">
        <ContactTitle>
          <ContactTitleText>Fale conosco</ContactTitleText>
          <ContactIcon href="#contact" aria-label="Nossos contatos">
            <PiArrowElbowRightDownLight />
          </ContactIcon>
        </ContactTitle>
        <Subheading>Nossos canais de comunicação</Subheading>
        <ContactElementsWrapper>
          <ContactElement
            href="mailto:andersonsscontabil@gmail.com"
            target="blank"
          >
            <MdOutlineMarkEmailUnread />
            <ContactInformation>
              andersonsscontabil@gmail.com
            </ContactInformation>
          </ContactElement>

          <ContactElement
            href="https://instagram.com/contabilidade3setor_as"
            target="blank"
          >
            <FaInstagram />
            <ContactInformation>contabilidade3setor_as</ContactInformation>
          </ContactElement>

          <ContactElement
            href="https://api.whatsapp.com/send?phone=5521966400919"
            target="blank"
          >
            <FaWhatsapp />
            <ContactInformation>(21) 96640-0919</ContactInformation>
          </ContactElement>
        </ContactElementsWrapper>
      </ContactContainer>
    </StyledContact>
  );
};
