import {Notes} from 'mdx-deck';
import React from 'react';

import techImg from '../images/tech.png';
import ImageWrapper from '../libs/ImageWrapper';
import {Fullscreen} from '../libs/Layout';

export default function TechPage() {
  return (
    <Fullscreen>
      <h3 style={{paddingLeft: '20px'}}>Technologies</h3>
      <ImageWrapper src={techImg} />
      <Notes>Some notes</Notes>
    </Fullscreen>
  );
}
