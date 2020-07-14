import styled, { css, keyframes } from 'styled-components';
import { hsl } from 'polished';

// .root {
//   --primary-color: #eceff1;
//   --secondary-color: #607d8b;
//   --black: #000;
//   --grey: #8d8d8f;
// }

const CollapsePanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 1px;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  border: ${hsl(220, 0.12, 0.95)};
  margin: 0;
`;

const Heading = styled.h2`
  background: rgb(41, 128, 185);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  color: #fff;
  margin: 0;
`;

const Content = styled.div`
  border: none;
  opacity: ${(props) => (props.open ? '1' : '0')};
  max-height: ${(props) => (props.open ? '100%' : '0')};
  overflow: hidden;
  padding: ${(props) => (props.open ? '1px 2px 1px 2px' : '0px 0px 0px 0px')};
  background: #eceff1;
`;

const AvatarBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;
`;

const AvatarOwner = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  text-align: right;
`;

const AvatarImage = styled.img`
  width: 42px;
  display: block;
  border-radius: 100%;
  src: ${(props) => props.src};
  alt: ${(props) => ''};
  font-size: 0.5em;
  border: 1px solid;
`;

const AvatarDistance = styled.h3`
  margin: 0px;
  font-weight: 400;
  font-size: 0.5em;
  line-height: 2;
  opacity: 0.8;
  text-align: right;
`;

export {
  AvatarBox,
  AvatarDistance,
  AvatarImage,
  AvatarOwner,
  CollapsePanel,
  Content,
  Heading,
};
