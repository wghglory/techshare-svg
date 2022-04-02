import React from 'react';
import styled from 'styled-components';

import coverbg1 from '../images/coverbg1.png';
import coverbg2 from '../images/coverbg2.png';
import {Fullscreen} from '../libs/Layout';

// usage:

// <Cover title='FE Trend 2021' subtitle='May 2021' name='Derek Wang' />

const BgCover = styled.div`
  background: url(${(props) => props.coverbg2}), url(${(props) => props.coverbg1});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 60%;
`;

const RightBox = styled.div`
  width: 40%;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.span`
  font-size: 50px;
  font-weight: 500;
  margin: 24px;
`;

const Subtitle = styled.span`
  font-size: 40px;
  /* color: #fdaa4c; */
  margin: 24px;
`;

const MeName = styled.span`
  font-size: 30px;
  /* color: #25d7fd; */
  margin: 24px;
`;

const Time = styled.span`
  font-size: 30px;
  /* color: #25d7fd; */
  margin: 24px;
`;

const Cover = ({title, subtitle, name, time}) => (
  <Fullscreen direction="row">
    <BgCover coverbg1={coverbg1} coverbg2={coverbg2}></BgCover>
    <RightBox>
      <Center>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <MeName>{name}</MeName>
        <Time>{time}</Time>
      </Center>
    </RightBox>
  </Fullscreen>
);

export default Cover;
