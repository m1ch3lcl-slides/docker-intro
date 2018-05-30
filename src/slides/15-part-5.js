import React from 'react';
import { Slide, Heading, Appear, Text } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Docker-compose
    </Heading>
    <div style={{ lineHeight: '2.5em' }}>
      <FitList>
        <Appear>
          <SpacedListItem>Un outils fourni par Docker</SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            Permet d'automatiser le déploiement d'une pile de containers
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            Fichier de configuration : docker-compose.yml, permet de définir :
            <ul style={{ marginLeft: '50px' }}>
              <li>services (containers)</li>
              <li>réseaux</li>
              <li>volumes</li>
            </ul>
          </SpacedListItem>
        </Appear>
      </FitList>
      <Appear>
        <Text>
          <a href="https://docs.docker.com/compose/compose-file/">
            https://docs.docker.com/compose/compose-file/
          </a>
        </Text>
      </Appear>
    </div>
  </Slide>
);
