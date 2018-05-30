import React from 'react';
import { Slide, Heading, ListItem, Text } from 'spectacle';
import { FitList } from '../tags';

export default (
  <Slide
    bgColor="primary"
    padding="100px"
    width="100%"
    transitionIn={[ 'fade' ]}
  >
    <Heading size={3} textColor="tertiary">
      Dockerfile
    </Heading>
    <div style={{ lineHeight: '2.5em' }}>
      <Text>
        Fichier permettant de décrire la construction d'une image à partir d'une
        image de départ
      </Text>
      <Text>Exemples de commandes disponibles :</Text>
      <FitList>
        <ListItem>FROM : image de départ</ListItem>
        <ListItem>
          WORKDIR : dossier de travail dans l'image, créé si inexistant
        </ListItem>
        <ListItem>COPY : copier des fichiers dans l'image</ListItem>
        <ListItem>RUN : exécuter une commande</ListItem>
        <ListItem>EXPOSE : exposer un port</ListItem>
        <ListItem>
          CMD, ENTRYPOINT : définit la commande par défaut au lancement du
          container
        </ListItem>
      </FitList>
      <Text>Commande : docker build [-t IMAGE[:TAG]] [DIR]</Text>
      <Text>
        <a href="https://docs.docker.com/engine/reference/builder/">
          https://docs.docker.com/engine/reference/builder/
        </a>
      </Text>
    </div>
  </Slide>
);
