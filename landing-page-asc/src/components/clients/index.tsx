"use client";

import Image from "next/image";
import livres from "./assets/igreja-livres-oficial.png";
import { StyledClients, ClientsContainer, ClientLogo } from "./style";

export const Clients: React.FC = () => {
  return (
    <StyledClients>
      <ClientsContainer>
        <ClientLogo>
          <Image src={livres} alt={"Logo da Igreja Livres"}></Image>
        </ClientLogo>
      </ClientsContainer>
    </StyledClients>
  );
};
