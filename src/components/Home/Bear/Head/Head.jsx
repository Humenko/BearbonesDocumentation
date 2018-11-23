import React from 'react';
import Head1 from './Head1';
import Head2 from './Head2';
import Head3 from './Head3';

const getHead = variant => {
  switch (variant) {
    case 2:
      return <Head2 />;
    case 3:
      return <Head3 />;
    default:
      return <Head1 />;
  }
};

export default function({ variant }) {
  return (
    <div className="body-part head" id="bb-head">
      {getHead(variant)}
    </div>
  );
}
