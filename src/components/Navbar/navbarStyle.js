import styled from "styled-components";

export const Nav = styled.nav `
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index:100;
`;

export const NavWrapper = styled.div `
display: flex;
justify-content: space-between;
padding-left: 50px;
@media (max-width:768px) {
  padding-left: 10px;
}
@media (max-width:500px) {
  padding-left: 0;
  flex-direction: column-reverse;
}
`;

export const Logo = styled.a `
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
@media (max-width:500px) {
display: none;
}
`;
export const LogoImg = styled.img `
pointer-events: none;
width: 100px;
height: 150px;
@media (max-width:768px) {
width: 90px;
height: 120px;
}
@media (max-width:425px) {
width: 80px;
height: 110px;
}
`;


export const MenuWrapper = styled.div `
display: flex;
`;

export const Discord = styled.a `
display: flex;
align-items:center;
justify-content: center;
background: var(--black);
font-weight: 700;
line-height: 25px;
font-size: 19px;
color: var(--white);
text-transform: uppercase;
padding: 20px 25px;
width: 300px;
height: 65px;
transition: .5s ease;
position: relative;
z-index: 11;
border: 1px solid transparent;
&.active{
  background: var(--white);
  color: var(--black);
  &:hover{
    background: var(--black);
    color: var(--white);
    border: 1px dashed var(--white);
  }
}
span{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;
  pointer-events: none;
  touch-action: none;
}
&:hover{background: var(--white); color: var(--black);    box-shadow: 0 0 20px var(--yellowDark);}
@media (max-width:500px) {
width: calc(100% - 65px);
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
font-size: 16px;
}
`;
export const Menu = styled.div `
display: inline-block;
background: var(--yellow);
width: 65px;
height: 65px;
position: relative;
transition: .5s ease-in-out;
z-index: 10;
&.active{
  background: var(--black);
}
`;
export const Bars = styled.div `
position: absolute;
left: 35%;
top: 35%;
display: inline-block;
width: 25px;
height: 18px;
&.active {
& div:nth-child(1) {
transform: rotate(45deg);
top: 8px;
}
& div:nth-child(2) {
width: 0;
}
& div:nth-child(3) {
  transform: rotate(-45deg);
  bottom: 8px;
}
}
`;
export const Bar = styled.div `
height: 2px;
left: 0;
position: absolute;
top: 0;
width: 100%;
background: #fff;
display: block;
transition: .5s ease;
&:nth-child(2) {
top: 45%;
}
&:nth-child(3) {
bottom: 0;
top: auto;
}
`;

export const MenuList = styled.div `
height: auto;
left: auto;
position: absolute;
top: -650px;
width: 365px;
z-index: 9;
right: 0;
background: #b69860;
text-align: left;
padding: 50px 65px 0 30px;
transition: all 0.5s ease-out;
border-radius: 0 0 10% 10%;
height:350px;
&.active{
  top: 65px;
}
@media (max-width:500px) {
  width: 100%;
}
`;

export const MenuLink = styled.a `
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
font-weight: 600;
font-size: 16px;
letter-spacing: 1px;
line-height: 24px;
color: var(--black);
padding-bottom: 10px;
margin-bottom: 10px;
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
text-transform: uppercase;
cursor: pointer;
transition: all 0.5s ease-out;
&:hover, &.active{
  color: var(--white);
}
svg{
color: inherit;
font-size: 22px;
display: inline-block;
}
`;

export const MenuIconWrapper = styled.div `
margin-top: 50px;
`;

export const MenuIconList = styled.ul `
display: flex;
align-items: center;
gap: 50px;
justify-content: space-around;
`;

export const MenuIconItem = styled.li `
`;

export const MenuIconLink = styled.a `
margin: 0 10px;
color: white;
font-size: 27px;
display: flex;
align-items: center;
justify-content: center;
transition: .5s ease-ease-in-out;
&:hover{
color: var(--black);
}

svg{
  pointer-events: none;
  width: 100%;
  height: 100%;
}
`;