import React from 'react';
import { Slide, Heading, Appear, Text } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Et Docker dans tout ça ?
    </Heading>
    <div style={{ lineHeight: '2.5em' }}>
      <FitList>
        <Appear>
          <SpacedListItem>
            Pas besoin de Docker pour créer des containers sur Linux
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            Un outils qui vous simplifie la vie : créer un container en une
            ligne de commande
          </SpacedListItem>
        </Appear>
      </FitList>
      <Appear>
        <div>
          <Text>
            <strong>Séparation client/serveur :</strong>
          </Text>
          <FitList>
            <SpacedListItem>
              Un serveur : dockerd (/var/run/docker.sock)
            </SpacedListItem>
            <SpacedListItem>Un client : docker</SpacedListItem>
          </FitList>
        </div>
      </Appear>
    </div>
  </Slide>
);
