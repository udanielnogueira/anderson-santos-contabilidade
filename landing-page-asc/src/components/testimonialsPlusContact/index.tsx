"use client";

import { Contact } from "../contact";
import { Testimonials } from "../testimonials";
import { StyledTestimonialsPlusContact } from "./style";

export const TestimonialsPlusContact = () => {
  return (
    <>
      <StyledTestimonialsPlusContact>
        <Testimonials />
        <Contact />
      </StyledTestimonialsPlusContact>
    </>
  );
};
