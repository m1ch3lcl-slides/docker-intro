import React from 'react';

import { Heading, Slide, Text, Appear } from 'spectacle';

export default (
  <Slide bgColor="primary" padding="0 20%">
    <Heading size={1} fit lineHeight={1} textColor="secondary">
      Docker
    </Heading>
    <Appear>
      <Text textColor="tertiary" size={1} fit bold>
        Comment les containers vont changer votre vie...
      </Text>
    </Appear>
    <Text textColor="secondary" size={5} fit style={{ marginTop: '50px' }}>
      <a href="https://goo.gl/xzGS2P">https://goo.gl/xzGS2P</a>
    </Text>
  </Slide>
);
