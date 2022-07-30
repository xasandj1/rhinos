import styled from "styled-components";

export const FooterContent = styled.footer `
padding: 100px 100px;
background: var(--black);
`;

export const FooterTop = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
`;

export const FooterTopFirst = styled.div `
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`;

export const FooterTitle = styled.h2 `
    font-size: 30px;
    line-height: 65px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--yellow);
    text-shadow: 0 0 20px var(--yellowDark);
`;

export const FooterTopTwo = styled.div `
display: flex;
align-items: center;
justify-content: center;
`;

export const FooterLogo = styled.a `
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height: 150px;
`;

export const FooterLogoImg = styled.img `
width: 100%;
height: 100%;
pointer-events: none;
`;

export const FooterTopThird = styled.div `
display: flex;
align-items: center;
justify-content: center;
`;

export const FooterBtn = styled.a `
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--yellowDark);
    font-weight: 700;
    line-height: 25px;
    font-size: 19px;
    color: var(--black);
    text-transform: uppercase;
    padding: 20px 25px;
    width: 300px;
    height: 65px;
    transition: .5s ease;
    position: relative;
    z-index: 11;
    border: 1px solid transparent;
    position: relative;
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background: var(--white);
            transition: .5s ease-in-out;
            z-index: -1;
        }
    &:hover{
        box-shadow: 0 0 30px var(--yellowDark);
        color: var(--yellow);
        &::before{
            width: 100%;
            right: 0;
        }
    }
    svg{
        color: inherit;
    }
`;

export const Btn = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex: 1;
    pointer-events: none;
    touch-action: none;
`;