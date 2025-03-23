"use client";

import {
  StyledFooter,
  FooterContainer,
  CompanyName,
  CompanyCopyright,
  CompanyDev,
} from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <CompanyCopyright>
          <span>&copy;</span> 2025 ASSC All rights reserved
        </CompanyCopyright>
        <CompanyDev>
          Developed by{" "}
          <a href="https://instagram.com/udanielnogueira/" target="blank">
            Nogdan Studio
          </a>
        </CompanyDev>
      </FooterContainer>
    </StyledFooter>
  );
};
