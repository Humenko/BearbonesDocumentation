import React from 'react';
import Legs1 from './Legs1';
import Legs2 from './Legs2';
import Legs3 from './Legs3';

const getLegs = variant => {
  switch (variant) {
    case 2:
      return <Legs2 />;
    case 3:
      return <Legs3 />;
    default:
      return <Legs1 />;
  }
};

export default function({ variant }) {
  return (
    <div className="body-part legs" id="bb-legs">
      {getLegs(variant)}
    </div>
  );
}
