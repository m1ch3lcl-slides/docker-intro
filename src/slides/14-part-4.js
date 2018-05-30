import React from 'react';
import { Slide, Heading, Appear } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Docker avancé
    </Heading>
    <div style={{ lineHeight: '2.5em' }}>
      <FitList>
        <Appear>
          <SpacedListItem>
            <strong>docker network</strong>
            <ul style={{ marginLeft: '50px' }}>
              <li>docker network create [OPTIONS] NETWORK</li>
              <li>
                docker network connect [OPTIONS] NETWORK CONTAINER : --alias
                ALIAS
              </li>
              <li>docker run : --network [NETWORK] --network-alias ALIAS</li>
            </ul>
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            <strong>docker volume create [OPTIONS] VOLUME</strong>
            <ul style={{ marginLeft: '50px' }}>
              <li>persistance des données en dehors du container</li>
              <li>partage de données entre containers</li>
              <li>docker run : -v VOLUME:MOUNTPATH</li>
            </ul>
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            <strong>docker run</strong>
            <ul style={{ marginLeft: '50px' }}>
              <li>--name NAME</li>
              <li>--network NETWORK --network-alias ALIAS</li>
              <li>--volume VOLUME|HOST_SRC:MOUNT_PATH[:rw|ro]</li>
              <li>-e VAR=VALUE, -p HOST_PORT:CONTAINER_PORT</li>
            </ul>
          </SpacedListItem>
        </Appear>
      </FitList>
    </div>
  </Slide>
);
