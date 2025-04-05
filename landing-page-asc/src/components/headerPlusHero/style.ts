import styled from "styled-components";

export const StyledHeaderPlusHero = styled.div`
  /* background: radial-gradient(circle, #0a2a4a 0%, #021221 100%); */

  /* background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
    url("/bg-5.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */

  background: radial-gradient(
      circle at 30% 40%,
      rgba(20, 60, 120, 0.4) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 60%,
      rgba(80, 120, 200, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 50% 50%, #0a2a4a 0%, #021221 100%);
`;
