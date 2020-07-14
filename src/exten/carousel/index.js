import React from 'react';
import { Swipeable } from 'react-swipeable';
import {
  Wrapper,
  CarouselContainer,
  CarouselSlot,
  SlideButton,
  PREV,
  NEXT,
} from './components';

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
const initialState = { pos: 0, sliding: false, dir: NEXT };

const Carousel = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);
  const slide = (dir) => {
    dispatch({ type: dir, numItems });
    setInterval(() => {
      dispatch({ type: 'stopSliding' });
    }, 10);
  };
  const config = {
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  };
  return (
    <Swipeable {...config}>
      <SlideButton onClick={() => slide(PREV)} float='left'>
        &#8592;
      </SlideButton>
      <SlideButton onClick={() => slide(NEXT)} float='right'>
        &#8594;
      </SlideButton>
      <Wrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(props.children, (child, index) => (
            <CarouselSlot
              key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
    </Swipeable>
  );
};

function reducer(state, { type, numItems }) {
  switch (type) {
    case 'reset':
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
      };
    case 'stopSliding':
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export default Carousel;
