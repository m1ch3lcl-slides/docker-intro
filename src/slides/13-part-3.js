import React from 'react';
import { Slide } from 'spectacle';
import Terminal from 'spectacle-terminal';

const step1 = `Sending build context to Docker daemon  2.048kB
Step 1/3 : FROM ubuntu
 ---> 452a96d81c30`;

const step2 = `Step 2/3 : RUN apt-get update && apt-get install nano
 ---> Running in 5e7f4bd059b5
Get:1 http://security.ubuntu.com/ubuntu bionic-security InRelease [83.2 kB]
...
Setting up nano (2.9.3-2) ...
update-alternatives: using /bin/nano to provide /usr/bin/editor (editor) in auto mode
update-alternatives: warning: skip creation of /usr/share/man/man1/editor.1.gz because associated file /usr/share/man/man1/nano.1.gz (of link group editor) doesn't exist
update-alternatives: using /bin/nano to provide /usr/bin/pico (pico) in auto mode
update-alternatives: warning: skip creation of /usr/share/man/man1/pico.1.gz because associated file /usr/share/man/man1/nano.1.gz (of link group pico) doesn't exist
 ---> 692716b4ea6f
Removing intermediate container 5e7f4bd059b5`;

const step3 = `Step 3/3 : CMD nano
 ---> Running in 5463e4f1ab7e
 ---> af7fc22613c8
Removing intermediate container 5463e4f1ab7e
Successfully built af7fc22613c8
Successfully tagged clement/dockerfile-nano:latest`;

export default (
  <Slide bgColor="primary" padding="100px">
    <div style={{ marginTop: '30px' }}>
      <Terminal
        title="Construction"
        output={[
          '> docker build -t clement/mynano:latest .',
          step1,
          step2,
          step3
        ]}
      />
    </div>
  </Slide>
);
