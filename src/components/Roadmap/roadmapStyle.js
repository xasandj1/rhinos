import styled from "styled-components";
import images from "../../data/images";

export const Roadmap = styled.section `
  background: url(${images.roadmap}) no-repeat center / cover;
  min-height: 2100px;
  padding: 200px 0 130px 0;
  position: relative;
`;

export const RoadMapContent = styled.div `
  display: flex;
  padding: 0 100px;
  height: inherit;
  position: relative;
  flex-direction: column;
`;

export const RoadMapBox = styled.div `
  width: 50%;
  &:nth-child(even) {
    margin-left: 50%;
    span {
      padding-left: 20px;
    }
  }
`;

export const RoadMapSpan = styled.span `
  font-size: 65px;
  line-height: 65px;
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
`;

export const RoadMapDividerWrapper = styled.div ``;

export const RoadMapDivider = styled.div `
  display: inline-block;
  margin: 10px 0;
  height: 1px;
  width: 100%;
  background: var(--yellow);
`;

export const RoadMapBoxItem = styled.div `
  padding-left: 50px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const RoadMapBoxItemText = styled.p `
  font-weight: 400;
  font-size: 22px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: var(--white);
  text-transform: capitalize;
  width: 660px;
`;

export const CenterLine = styled.div `
  width: 1px;
  height: 85%;
  background: var(--yellow);
  position: absolute;
  top: 6%;
  left: 50%;
`;

export const StickyIcon = styled.div `
height: auto;
left: 50%;
position: sticky;
top: 20px;
width: 50px;
transform: translateX(-50%);
/* padding-top: 20px; */
`;
export const StickyIconImg = styled.img `
height: auto;
width: 100%;
display: block;
position: sticky;
`;