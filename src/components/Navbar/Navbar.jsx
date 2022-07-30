import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { GiRhinocerosHorn } from "react-icons/gi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import {
  Discord,
  Logo,
  LogoImg,
  MenuWrapper,
  Nav,
  NavWrapper,
  Menu,
  Bars,
  Bar,
  MenuList,
  MenuLink,
  MenuIconWrapper,
  MenuIconList,
  MenuIconItem,
  MenuIconLink,
} from "./navbarStyle.js";
import images from "../../data/images.js";
const Navbar = () => {
  let [active, setActive] = useState(false);

  const toggle = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <Nav>
      <NavWrapper>
        <Logo>
          <LogoImg src={images.logo} />
        </Logo>
        <MenuWrapper>
          <Discord className={active ? "active" : ""} href="/" title="Join us">
            <span>
              Join discord <FaDiscord fontSize={40} />
            </span>
          </Discord>
          <Menu className={active ? "active" : ""}>
            <Bars className={active ? "active" : ""} onClick={() => toggle()}>
              <Bar></Bar>
              <Bar></Bar>
              <Bar></Bar>
            </Bars>
          </Menu>
          <MenuList className={active ? "active" : ""}>
            <MenuLink href="#about">
              <GiRhinocerosHorn />
              About us
            </MenuLink>
            <MenuLink href="#join">
              <GiRhinocerosHorn />
              How to join
            </MenuLink>
            <MenuLink>
              <GiRhinocerosHorn />
              Artists
            </MenuLink>
            <MenuLink>
              <GiRhinocerosHorn />
              Roadmap
            </MenuLink>
            <MenuIconWrapper>
              <MenuIconList>
                <MenuIconItem>
                  <MenuIconLink href="">
                    <BsInstagram />
                  </MenuIconLink>
                </MenuIconItem>
                <MenuIconItem>
                  <MenuIconLink href="">
                    <BsTwitter />
                  </MenuIconLink>
                </MenuIconItem>
                <MenuIconItem>
                  <MenuIconLink href="">
                    <SiDiscord />
                  </MenuIconLink>
                </MenuIconItem>
              </MenuIconList>
            </MenuIconWrapper>
          </MenuList>
        </MenuWrapper>
      </NavWrapper>
    </Nav>
  );
};

export default Navbar;
