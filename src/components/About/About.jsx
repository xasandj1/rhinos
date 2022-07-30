import React from "react";
import {
  AboutContent,
  AboutLeft,
  AboutSection,
  AboutTitle,
  AboutTxt,
} from "./aboutStyle";

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <AboutLeft>
          <AboutTitle>ABOUT US</AboutTitle>
          <AboutTxt>
            Royal Rhinos Club is a collection of 5,555 unique hand drawn NFTs.
            The main objective for us is to build Strong and ambitious
            community, club members will gain access to airdrops, private
            releases, exclusive merch collections and more. Besides that our
            team is working to save the lives of Rhinos in wildlife, we will be
            donating a certain amount from minting proceeds. 
          </AboutTxt>
        </AboutLeft>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
