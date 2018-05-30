import React from 'react';
import { Slide, Heading, Appear, BlockQuote, Cite } from 'spectacle';
import { LightQuote } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Containers et images
    </Heading>
    <BlockQuote>
      <LightQuote textColor="secondary" bold={false} textSize="4rem">
        <Appear>
          <p>
            A container is launched by running an <strong>image</strong>. An
            image is an&nbsp;
            <strong>executable package</strong> that includes everything needed
            to run an application--the code, a runtime, libraries, environment
            variables, and configuration files.
          </p>
        </Appear>

        <Appear>
          <p>
            A container is a <strong>runtime instance of an image</strong>--what
            the image becomes in memory when executed (that is, an{' '}
            <strong>image with state</strong>, or a user process).
          </p>
        </Appear>
      </LightQuote>
      <Cite>
        <a href="https://docs.docker.com/get-started/#docker-concepts">
          https://docs.docker.com/get-started/#docker-concepts
        </a>
      </Cite>
    </BlockQuote>
  </Slide>
);
