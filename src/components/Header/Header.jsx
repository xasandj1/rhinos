import React from "react";
import {Navbar, Welcome} from '../index'
import { HeaderComponent } from "./headerStyle";
const Header = () => {
  return (
    <HeaderComponent>
      <Navbar />
      <Welcome />
    </HeaderComponent>
  );
};

export default Header;
