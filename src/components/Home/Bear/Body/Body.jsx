import React from 'react';
import Body1 from './Body1';
import Body2 from './Body2';
import Body3 from './Body3';

const getBody = variant => {
  switch (variant) {
    case 2:
      return <Body2 />;
    case 3:
      return <Body3 />;
    default:
      return <Body1 />;
  }
};

export default function({ variant }) {
  return (
    <div className="body-part torso" id="bb-body">
      {getBody(variant)}
    </div>
  );
}
