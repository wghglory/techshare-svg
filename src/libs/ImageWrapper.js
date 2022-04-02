import {Image} from 'mdx-deck';
import React from 'react';

export default function ImageWrapper({background = 'rgb(34, 36, 41)', src, size = '100%'}) {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        padding: '0 20px 40px',
        width: size,
        height: size,
        background,
      }}
    >
      <Image src={src} style={{backgroundSize: 'contain'}} />
    </div>
  );
}
