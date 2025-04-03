"use client";

import { Header } from "../header";
import { Hero } from "../hero";
import { StyledHeaderPlusHeroContainer } from "./style";

export const HeaderPlusHeroContainer = () => {
  return (
    <>
      <StyledHeaderPlusHeroContainer>
        <Header />
        <Hero />
      </StyledHeaderPlusHeroContainer>
    </>
  );
};
