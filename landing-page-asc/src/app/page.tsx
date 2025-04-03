import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { HeaderPlusHeroContainer } from "@/components/headerPlusHeroContainer";
import { TestimonialsPlusContactContainer } from "@/components/testimonialsPlusContactContainer";

export default function Home() {
  return (
    <>
      <HeaderPlusHeroContainer />
      <Services />
      <Clients />
      <TestimonialsPlusContactContainer />
      <Footer />
    </>
  );
}
