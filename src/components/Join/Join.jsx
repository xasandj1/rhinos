import React from 'react';
import { JoinBtn, JoinContent, JoinTitle, JoinTxt } from './joinStyle'

const Join = () => {
   return (
      <JoinContent id='join'>
         <JoinTitle><strong>HOW</strong> TO JOIN US?</JoinTitle>
         <JoinTxt>Enter our Rhinos on Discord and meet all your fellow rhinos!
         </JoinTxt>
         <JoinTxt>The tribe is growing rapidly, more and more rhinos are joining us everyday! So dont miss out.</JoinTxt>
         <JoinBtn>JOIN DISCORD</JoinBtn>
      </JoinContent>
   )
}

export default Join