import React from 'react';
import { Slide, Heading, Appear, Text } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide
    bgColor="primary"
    padding="100px"
    width="100%"
    transitionIn={[ 'fade' ]}
  >
    <Heading size={3} textColor="tertiary">
      Et en ce qui nous concerne ?
    </Heading>
    <Text margin="30px auto 10px">
      Conteneur + Marchandise = Container + Processus
    </Text>
    <div style={{ lineHeight: '2.5em' }}>
      <FitList>
        <Appear>
          <SpacedListItem>
            <strong>
              Fournit un environnement Linux (ubuntu, debian, alpine, ...)
            </strong>
            <br />- Compatible avec "n'importe quel" paquet linux
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            <strong>
              Est supporté par la plupart des plateforme d'hébergement
            </strong>
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            <strong>
              Encapsule un processus et ses dépendances en l'isolant du reste du
              système
            </strong>
            <br />- Transférable d'une solution d'hébergement à l'autre sans
            tout reconfigurer/réinstaller
            <br />- Recopiable à l'infini
          </SpacedListItem>
        </Appear>
      </FitList>
    </div>
  </Slide>
);
