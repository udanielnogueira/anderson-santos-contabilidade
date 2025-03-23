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

import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { PiArrowElbowRightDownLight } from "react-icons/pi";

export const Contact = () => {
  return (
    <StyledContact id="contact">
      <ContactContainer>
        <ContactTitle>
          <ContactTitleText>Nosso contato</ContactTitleText>
          <PiArrowElbowRightDownLight />
        </ContactTitle>
        <ContactElementsWrapper>
          <ContactElement>
            <FaWhatsapp />
            <ContactInformation>21 96640-0919</ContactInformation>
          </ContactElement>

          <ContactElement>
            <MdOutlineMarkEmailUnread />
            <ContactInformation>
              andersonsscontabil@gmail.com
            </ContactInformation>
          </ContactElement>
        </ContactElementsWrapper>
      </ContactContainer>
    </StyledContact>
  );
};
