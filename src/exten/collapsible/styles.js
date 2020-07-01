import styled, { css, keyframes } from 'styled-components';
import { hsl } from 'polished';

// .root {
//   --primary-color: #eceff1;
//   --secondary-color: #607d8b;
//   --black: #000;
//   --grey: #8d8d8f;
// }

const CollapsePanel = styled.div`
  width: 25%;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  border: ${hsl(220, 0.12, 0.95)};
  padding: 5px;
`;

const Heading = styled.h2`
  background: #eceff1;
  color: white;
  padding: 5px 10px 5px 10px;
  margin-bottom: 0;
`;

const Content = styled.div`
  border: none;
  opacity: ${(props) => (props.open ? '1' : '0')};
  max-height: ${(props) => (props.open ? '100%' : '0')};
  overflow: hidden;
  padding: ${(props) => (props.open ? '1px 2px 1px 2px' : '0px 0px 0px 0px')};
  transition: all 0.3s;
  background: #eceff1;
`;

const AvatarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AvatarOwner = styled.span`
  padding-right: 0.8rem;
  color: #8d8d8f;
  font-weight: 700;
  font-size: 0.7em;
`;

const AvatarImage = styled.img`
  width: 42px;
  display: block;
  border-radius: 50%;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const AvatarDistance = styled.p`
  color: #666;
  font-weight: 500;
  font-size: 0.7em;
  text-align: left;
  line-height: 1.5;
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
