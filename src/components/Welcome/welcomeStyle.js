import styled from "styled-components";

export const WelcomeSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
overflow: hidden;
  
  @media (max-width: 500px) {
    justify-content: center;
}
`;
export const WelcomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WelcomeLeft = styled.div`
padding-left: 100px;
z-index: 1;
@media (max-width: 1024px) {
  padding-left: 40px;
}
@media (max-width: 500px) {
  padding-left: 0px;
}
`;
export const WelcomeRight = styled.div`
.rhinos__img {
position: absolute;
bottom: 0;
right: -6%;
width: 60%;
pointer-events: none;
@media (max-width: 768px) {
  width: 70%;
}
@media (max-width: 500px) {
  width: 95%;
  height: 45%;
}
}
`;
export const WelcomeTitle = styled.h1`
display: flex;
flex-direction: column;
font-size: 65px;
line-height: 65px;
font-weight: 300;
text-transform: uppercase;
color: var(--yellow);
@media (max-width: 768px) {
  font-size: 50px;
}
@media (max-width: 768px) {
  font-size: 41px;
}
@media (max-width: 425px) {
  font-size: 35px;
  line-height: 50px;
}
@media (max-width: 375px) {
  font-size: 30px;
}
`;
export const WelcomeStrong = styled.strong`
  color: var(--white);
`;


