"use client";

import {
  ContactContainer,
  ContactElement,
  ContactElementsWrapper,
  ContactInformation,
  ContactTitle,
  ContactTitleText,
  StyledContact,
} from "./style";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { PiArrowElbowRightDownLight } from "react-icons/pi";

export const Contact = () => {
  return (
    <StyledContact id="contact">
      <ContactContainer>
        <ContactTitle>
          <ContactTitleText>Nossos contatos</ContactTitleText>
          <PiArrowElbowRightDownLight />
        </ContactTitle>
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
