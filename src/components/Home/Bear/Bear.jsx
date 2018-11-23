import React from 'react';
import Body from './Body/Body';
import Head from './Head/Head';
import Legs from './Legs/Legs';

export default function({ body, legs, head }) {
  return (
    <div className="bb-body-parts">
      <Head variant={head} />
      <Body variant={body} />
      <Legs variant={legs} />
    </div>
  );
}
