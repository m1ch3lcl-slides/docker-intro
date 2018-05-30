import React from 'react';
import { Slide, Heading, Appear } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide
    bgColor="primary"
    padding="100px"
    width="100%"
    transitionIn={[ 'fade' ]}
  >
    <Heading size={3} textColor="tertiary">
      Mais encore ?
    </Heading>
    <div style={{ lineHeight: '2.5em' }}>
      <FitList>
        <Appear>
          <SpacedListItem>
            <strong>
              Permet de stocker n'importe quel type de marchandises
            </strong>
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            <strong>
              Taille et forme définie par des normes internationales
            </strong>
            <br />- Simplifie le stockage, transfert entre différents moyens de
            transport
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            <strong>Fermé/verrouillé avant l'expédition</strong>
            <br />- Pas de risque d'échanger des marchandises entre containers
            pendant le transport
            <br />- Pas de raison de toucher au contenu
          </SpacedListItem>
        </Appear>
      </FitList>
    </div>
  </Slide>
);
