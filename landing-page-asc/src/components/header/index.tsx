"use client";

import {
  Logo,
  LinkList,
  LinkItem,
  HeaderButton,
  ArrowRight,
  StyledHeader,
  HeaderContainer,
} from "./style";

export const Header = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre nós", href: "#about-us" },
    { name: "Depoimentos", href: "#testimonials" },
  ];

  return (
    <>
      <StyledHeader>
        <HeaderContainer>
          <Logo />
          <LinkList>
            {links.map((item) => (
              <LinkItem key={item.name}>
                <a href={item.href}>{item.name}</a>
              </LinkItem>
            ))}
          </LinkList>
          <HeaderButton href="#">
            <ArrowRight />
            Fale conosco
          </HeaderButton>
        </HeaderContainer>
      </StyledHeader>
    </>
  );
};
