import React from 'react';
import { Slide, Heading, Appear, Image, Text } from 'spectacle';

import ContainerVsVm from '../assets/container-vs-vm.png';

export default (
  <Slide bgColor="primary" padding="100px" width="100%">
    <Heading size={3} textColor="tertiary">
      VM vs Container
    </Heading>
    <Appear>
      <Image
        src={ContainerVsVm}
        style={{ marginTop: '50px', height: '500px' }}
      />
    </Appear>
    <Appear>
      <div>
        <Text>Plus léger | moins safe | centré processus vs centré OS</Text>
        <Text>
          <em>
            <a href="https://docs.docker.com/engine/security/security/">
              https://docs.docker.com/engine/security/security/
            </a>
          </em>
        </Text>
      </div>
    </Appear>
  </Slide>
);
