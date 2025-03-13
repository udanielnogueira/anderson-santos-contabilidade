"use client";

import {
  Logo,
  Menu,
  LinkList,
  LinkItem,
  ContactBtn,
  StyledHeader,
  HeaderContainer,
} from "./style";

export const Header = () => {
  const links = [
    { name: "Serviços", href: "#" },
    { name: "Sobre", href: "#" },
    { name: "Depoimentos", href: "#" },
  ];

  return (
    <>
      <StyledHeader>
        <HeaderContainer>
          <Menu>
            <Logo />
            <LinkList>
              {links.map((item) => (
                <LinkItem key={item.name}>
                  <a href={item.href}>{item.name}</a>
                </LinkItem>
              ))}
            </LinkList>
            <ContactBtn href="#">Contato</ContactBtn>
          </Menu>
        </HeaderContainer>
      </StyledHeader>
    </>
  );
};
