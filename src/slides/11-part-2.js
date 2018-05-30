import React from 'react';
import { Slide, Heading, Appear } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Résumé des commandes
    </Heading>
    <div style={{ lineHeight: '2.5em' }}>
      <FitList>
        <Appear>
          <SpacedListItem>
            <strong>docker run [FLAGS] IMAGE[:TAG] [COMMAND]</strong>
            <br />
            <Appear>
              <em>docker pull IMAGE[:TAG], docker create ..., docker start</em>
            </Appear>
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            <strong>docker start [CONTAINER]</strong> et{' '}
            <strong>docker stop [CONTAINER]</strong>
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            <strong>docker images</strong> et <strong>docker ps [-a]</strong>
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            <strong>docker exec [FLAGS] CONTAINER COMMAND</strong>
          </SpacedListItem>
        </Appear>
      </FitList>
    </div>
  </Slide>
);
