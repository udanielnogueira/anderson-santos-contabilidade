import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>ASSC</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Conheça o nosso escritório de Contabilidade"
        />
      </head>
      <body className={hankenGrotesk.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
