import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { url } from "inspector";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
