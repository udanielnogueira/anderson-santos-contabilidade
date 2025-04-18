import { Footer } from "@/components/footer";
import { Clients } from "@/components/clients";
import { Services } from "@/components/services";
import { HeaderPlusHero } from "@/components/headerPlusHero";
import { TestimonialsPlusContact } from "@/components/testimonialsPlusContact";
import { About } from "@/components/about";
import { Specials } from "@/components/especials";

export default function Home() {
  return (
    <>
      <HeaderPlusHero />
      <Services />
      <Clients />
      <Specials />
      <About />
      <TestimonialsPlusContact />
      <Footer />
    </>
  );
}
