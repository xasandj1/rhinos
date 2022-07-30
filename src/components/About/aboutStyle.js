import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 50px 0;
  background: var(--black);
  /* opacity: 0.8; */
`;

export const AboutContent = styled.div`
  padding: 0px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    padding: 0 50px;
  }
  @media (max-width: 500px) {
    padding: 0 30px;
  }
`;

export const AboutLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 500px) {
    align-items: center;
  }
`;

export const AboutTitle = styled.h2`
  font-weight: 700;
  font-size: 56px;
  line-height: 68px;
  letter-spacing: 0.01em;
  color: var(--yellowDark);
  margin-bottom: 59px;
  @media (max-width: 1024px) {
    font-size: 45px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    font-size: 35px;
    margin-bottom: 30px;
  }
`;

export const AboutTxt = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: var(--white);
  max-width: 541px;
  width: 100%;
  @media (max-width: 500px) {
    text-align: center;
  }
`;
