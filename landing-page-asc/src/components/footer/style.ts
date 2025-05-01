import styled from "styled-components";

export const StyledFooter = styled.section`
  border-top: 0.1rem solid var(--dark-main);

  background-color: var(--white-bg);

  /* background: radial-gradient(
      circle at 30% 40%,
      rgba(20, 60, 120, 0.4) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 60%,
      rgba(80, 120, 200, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 50% 50%, #0a2a4a 0%, #021221 100%); */

  /* background: radial-gradient(circle, #0a2a4a 0%, #021221 100%); */
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 128rem;

  height: 8rem;
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1080px) {
    height: 5.6rem;
    max-width: 36rem;
    font-size: 1.4rem;
  }
`;

export const CompanyCopyright = styled.p`
  color: var(--dark-main);
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 700;
    font-size: 1.8rem;
    margin-right: 0.4rem;
  }

  @media screen and (max-width: 1080px) {
    margin-bottom: 1px;
  }
`;

export const CompanyDev = styled.div`
  color: var(--dark-main);
  font-weight: 500;

  a {
    color: var(--dark-main);
    text-decoration: underline;
  }
`;
