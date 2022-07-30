import React from "react";
import images from '../../data/images';
import { FaDiscord } from "react-icons/fa";
import {
    Btn,
    FooterBtn,
  FooterContent,
  FooterLogo,
  FooterLogoImg,
  FooterTitle,
  FooterTop,
  FooterTopFirst,
  FooterTopThird,
  FooterTopTwo,
} from "./footerStyle";

const Footer = () => {
  return (
    <FooterContent>
      <FooterTop>
        <FooterTopFirst>
            <FooterTitle>Royal Rhions Club</FooterTitle>
        </FooterTopFirst>
        <FooterTopTwo>
          <FooterLogo>
            <FooterLogoImg src={images.logo} />
          </FooterLogo>
        </FooterTopTwo>
        <FooterTopThird>
            <FooterBtn>
                <Btn>Join discord <FaDiscord fontSize={40}/></Btn>
            </FooterBtn>
        </FooterTopThird>
      </FooterTop>
    </FooterContent>
  );
};

export default Footer;
