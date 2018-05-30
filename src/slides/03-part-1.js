import React from 'react';
import { Slide, Heading, Appear, Image } from 'spectacle';

import ContainerJpg from '../assets/container.jpg';

export default (
  <Slide
    bgColor="primary"
    padding="100px"
    width="100%"
    transitionOut={[ 'fade' ]}
  >
    <Heading size={3} textColor="tertiary">
      Qu'est-ce qu'un container ?
    </Heading>
    <Appear>
      <Image
        src={ContainerJpg}
        style={{ marginTop: '50px', height: '500px' }}
      />
    </Appear>
  </Slide>
);
