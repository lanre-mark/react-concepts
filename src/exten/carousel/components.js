import styled, { css } from 'styled-components';
import GlobalIcon from '../../assets/global-loader.gif';
import LoaderIcon from '../../assets/loader.gif';

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export const Item = styled.div`
  text-align: center;
  padding: 100px;
  background-image: ${(props) => `url(${props.img})`};
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${(props) => (props.sliding ? 'none' : 'transform 1s ease')};
  transform: ${(props) => {
    if (!props.sliding) return 'translateX(calc(-80% - 20px))';
    if (props.dir === PREV) return 'translateX(calc(2 * (-80% - 20px)))';
    return 'translateX(0%)';
  }};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${(props) => props.order};
`;

//   color: #ffffff;
//   font-family: Open Sans;
//   font-size: 14px;
//   font-weight: 400;
//   padding: 1px;
//   background-color: #f66f3e;
//   border: 1px solid white;
//   text-decoration: none;
//   display: inline-block;
//   cursor: pointer;
export const SlideButton = styled.button`
  margin 2px 0px 4px 0px;
  padding: 2px;
  font-family: Arial;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 40%;
  background-color: #f66f3e;
  background-color: rgb(245, 245, 245);
  cursor: pointer;
  display: inline-block;
  text-decoration: none;

  text-decoration: none;
  float: ${(props) => props.float};

  &::-moz-focus-inner {
    border: 0;
  }

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;

// Loader

export const Loader = styled.div`
  position: relative;
  &::after {
    display: none;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff center center no-repeat;
    opacity: 0.8;

    ${({ showLoader }) =>
      showLoader &&
      css`
        display: block;
        background-image: url(${LoaderIcon});
      `}
  }
`;

export const CarouselWrapper = styled(Loader)`
  min-height: 100%;
`;
