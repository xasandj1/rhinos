import React from "react";
import images from "../../data/images";
import {
  WelcomeContent,
  WelcomeLeft,
  WelcomeRight,
  WelcomeSection,
  WelcomeStrong,
  WelcomeTitle,
} from "./welcomeStyle";
const Welcome = () => {
  return (
    <WelcomeSection>
      <WelcomeContent>
        <WelcomeLeft>
          <WelcomeTitle>
            <WelcomeStrong>Welcome to the</WelcomeStrong>
            Royal Rhinos Club
          </WelcomeTitle>
        </WelcomeLeft>
        <WelcomeRight>
          <img className="rhinos__img" src={images.rhinos} alt=""/>
        </WelcomeRight>
      </WelcomeContent>
    </WelcomeSection>
  );
};

export default Welcome;
