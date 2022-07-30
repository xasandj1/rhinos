import styled from "styled-components";

export const JoinContent = styled.section `
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   background: var(--black);
  padding-top: 100px;
`;

export const JoinTitle = styled.h2 `
font-weight: 700;
font-size: 50px;
line-height: 68px;
letter-spacing: 0.01em;
color: var(--white);
margin-bottom: 100px;
strong{
   color: var(--yellowDark);  
}
`;
export const JoinTxt = styled.p `
font-weight: 500;
font-size: 18px;
line-height: 22px;
text-align: center;
letter-spacing: 0.01em;
color: var(--white);
&:nth-child(2){
   margin-bottom: 15px;
}
`;
export const JoinBtn = styled.a `
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.015em;
color: #070707;
padding: 20px;
background: var(--white);
border-radius: 10px;
margin: 100px 0 70px 0;
transition: .5s ease;
&:hover{
   box-shadow: 0 2px 20px var(--yellow);
   background: var(--black);
   color: var(--white);
}
`;