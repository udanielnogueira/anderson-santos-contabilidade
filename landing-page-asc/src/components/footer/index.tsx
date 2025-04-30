"use client";

import {
  StyledFooter,
  FooterContainer,
  CompanyCopyright,
  CompanyDev,
} from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <CompanyCopyright>
          <span>&copy;</span>2025 ASSC
        </CompanyCopyright>
        <CompanyDev>
          By{" "}
          <a href="https://instagram.com/udanielnogueira/" target="blank">
            Nogdan Studio
          </a>
        </CompanyDev>
      </FooterContainer>
    </StyledFooter>
  );
};
