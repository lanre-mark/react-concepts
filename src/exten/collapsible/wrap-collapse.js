import React, { useState } from 'react';

import {
  AvatarBox,
  AvatarDistance,
  AvatarImage,
  AvatarOwner,
  CollapsePanel,
  Content,
  Heading,
} from './styles';

import Clock from '../clock/extenClock';
import useClockTicker from '../clock/clockhook';

// const clockDate = useClockTicker({
//   label: 'California',
//   value: 'America/Los_Angeles',
// });
// const clockDate1 = useClockTicker({
//   label: 'Lagos',
//   value: 'Africa/Lagos',
// });
// const clockDate2 = useClockTicker({
//   label: 'Macau',
//   value: 'Asia/Macau',
// });
// const clockPayload = {
//   theme: {
//     colorLightest: '#f0f0f0',
//     colorLight: '#cecece',
//     colorMedium: '#adadad',
//     colorDark: '#414141',
//     colorWhite: '#fff',
//     colorBlack: '#000',
//   },
//   clockSize: '230px',
//   date: clockDate,
// };
// const clockPayload1 = {
//   theme: {
//     colorLightest: '#f0f0f0',
//     colorLight: '#cecece',
//     colorMedium: '#adadad',
//     colorDark: '#414141',
//     colorWhite: '#fff',
//     colorBlack: '#000',
//   },
//   clockSize: '230px',
//   date: clockDate1,
// };
// const clockPayload2 = {
//   theme: {
//     colorLightest: '#f0f0f0',
//     colorLight: '#cecece',
//     colorMedium: '#adadad',
//     colorDark: '#414141',
//     colorWhite: '#fff',
//     colorBlack: '#000',
//   },
//   clockSize: '230px',
//   date: clockDate2,
// };

// const allClockPayloads = {};
// allClockPayloads[0] = clockPayload;
// allClockPayloads[1] = clockPayload1;
// allClockPayloads[2] = clockPayload2;
// allClockPayloads[3] = clockPayload1;
// allClockPayloads[4] = clockPayload;

const Accordion = () => {
  const [compOpen, setCompOpen] = useState(false);

  const toggleOpen = () => {
    setCompOpen(!compOpen);
  };

  const clockDate = useClockTicker({
    label: 'California',
    value: 'America/Los_Angeles',
  });
  const clockPayload = {
    theme: {
      colorLightest: '#f0f0f0',
      colorLight: '#cecece',
      colorMedium: '#adadad',
      colorDark: '#414141',
      colorWhite: '#fff',
      colorBlack: '#000',
    },
    clockSize: '130px',
    date: clockDate,
  };

  return (
    <CollapsePanel>
      <Heading onClick={toggleOpen}>
        <AvatarBox>
          <AvatarOwner>
            Olanrewaju Makinde
            <AvatarDistance>24,354km away from you</AvatarDistance>
          </AvatarOwner>
          <AvatarImage
            src={
              'https://lh3.googleusercontent.com/a-/AOh14Gjhby_af4Ml6LhVGn4dapmIWWU5IcASCBmFNOUr'
            }
            alt={'avatar'}
          ></AvatarImage>
        </AvatarBox>
      </Heading>
      <Content open={compOpen}>
        {/* <p>Consider me opened!</p> */}
        <Clock {...clockPayload}></Clock>
      </Content>
    </CollapsePanel>
  );
};

export default Accordion;
