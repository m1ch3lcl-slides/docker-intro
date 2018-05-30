import React from 'react';
import { Slide, Heading } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

const getColor = (activeIndex, i) =>
  activeIndex && activeIndex !== i ? '#ccc' : null;

export default activeIndex => (
  <Slide bgColor="primary">
    <Heading size={2} textColor="tertiary">
      Sommaire
    </Heading>
    <div style={{ height: '50px' }} />
    <FitList ordered start={1}>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 1)}>
        Container et virtualisation légère
      </SpacedListItem>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 2)}>
        Et en pratique ? Images et containers
      </SpacedListItem>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 3)}>
        Créer des images facilement : Dockerfile
      </SpacedListItem>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 4)}>
        Docker - mode expert
      </SpacedListItem>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 5)}>
        Docker-compose à la rescousse
      </SpacedListItem>
    </FitList>
  </Slide>
);
