"use client";

import { Header } from "../header";
import { Hero } from "../hero";
import { StyledHeaderPlusHero } from "./style";

export const HeaderPlusHero = () => {
  return (
    <>
      <StyledHeaderPlusHero>
        <Header />
        <Hero />
      </StyledHeaderPlusHero>
    </>
  );
};
