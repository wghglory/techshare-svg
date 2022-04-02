import React from 'react';

export function TwoColumn({left, right}) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', height: '100%', width: '100%'}}>
      <div style={{width: '50%', display: 'flex', justifyContent: 'center', padding: '20px'}}>{left}</div>
      <div style={{width: '50%', display: 'flex', justifyContent: 'center', padding: '20px'}}>{right}</div>
    </div>
  );
}

export function ThreeColumn({left, center, right}) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', height: '100%', width: '100%'}}>
      <div style={{width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{left}</div>
      <div style={{width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{center}</div>
      <div style={{width: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{right}</div>
    </div>
  );
}

export const Fullscreen = ({children, direction = 'column'}) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: direction,
    }}
  >
    {children}
  </div>
);

export const Center = ({children, direction = 'column'}) => (
  <div
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '50px',
      flexDirection: direction,
    }}
  >
    {children}
  </div>
);

export const SmallText = ({children}) => <p style={{fontSize: '20px'}}>{children}</p>;
