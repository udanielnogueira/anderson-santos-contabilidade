"use client";

import { Contact } from "../contact";
import { Testimonials } from "../testimonials";
import { StyledTestimonialsPlusContactContainer } from "./style";

export const TestimonialsPlusContactContainer = () => {
  return (
    <>
      <StyledTestimonialsPlusContactContainer>
        <Testimonials />
        <Contact />
      </StyledTestimonialsPlusContactContainer>
    </>
  );
};
