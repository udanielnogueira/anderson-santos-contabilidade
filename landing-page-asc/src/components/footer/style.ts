import styled from "styled-components";

export const StyledFooter = styled.section``;

export const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 128rem;

  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CompanyName = styled.p`
  color: var(--text-color-1);
  font-weight: 600;
  font-size: 1.6rem;
`;

export const CompanyCopyright = styled.p`
  color: var(--text-color-2);
  font-weight: 300;
  font-size: 1.6rem;

  display: flex;
  align-items: center;

  span {
    font-weight: 400;
    font-size: 1.8rem;
    margin-right: 0.4rem;
  }
`;

export const CompanyDev = styled.div`
  color: var(--text-color-2);
  font-weight: 400;
  font-size: 1.6rem;

  a {
    color: var(--primary-color);
  }
`;
