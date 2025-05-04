"use client";
import Image from "next/image";
import Logo from "./assets/logo.png";

import {
  LinkList,
  LinkItem,
  ArrowRight,
  HeaderButton,
  StyledHeader,
  HeaderContainer,
} from "./style";

export const Header = () => {
  const links = [
    { name: "Home", href: "/" },

    { name: "Serviços", href: "#services" },
    { name: "Clientes", href: "#clients" },
    { name: "Especialidades", href: "#specials" },
    { name: "Sobre nós", href: "#about" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <>
      <StyledHeader>
        <HeaderContainer>
          <Image src={Logo} alt={"Logo"}></Image>
          <LinkList>
            {links.map((item) => (
              <LinkItem key={item.name}>
                <a href={item.href}>{item.name}</a>
              </LinkItem>
            ))}
          </LinkList>
          <HeaderButton
            href="https://api.whatsapp.com/send?phone=5521966400919"
            target="blank"
          >
            <ArrowRight />
            <span>Fale conosco</span>
          </HeaderButton>
        </HeaderContainer>
      </StyledHeader>
    </>
  );
};
