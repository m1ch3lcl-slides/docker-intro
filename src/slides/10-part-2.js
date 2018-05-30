import React from 'react';
import { Slide, Heading } from 'spectacle';
import Terminal from 'spectacle-terminal';

const pullOutput = `
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
a48c500ed24e: Pull complete
1e1de00ff7e1: Pull complete
0330ca45a200: Pull complete
471db38bcfbf: Pull complete
0b4aba487617: Pull complete
Digest: sha256:c8c275751219dadad8fa56b3ac41ca6cb22219ff117ca98fe82b42f24e1ba64e
Status: Downloaded newer image for ubuntu:latest
`;

const ubuntuBash = `
root@a82ebe753dc6:/#
`;

const dockerCommit = `
> docker commit a82ebe753cd6 clement/ubuntu-with-nano:latest
sha256:10e1ed74c6fac50aaf645d90dc92f5f9db9e3575a08e0039e859275a3c33132a

> docker images
REPOSITORY                 TAG                 IMAGE ID            CREATED             SIZE
clement/ubuntu-with-nano   latest              10e1ed74c6fa        3 seconds ago       121MB

`;

const dockerExec = `
> docker exec -it nano bash
root@725e0de035c2:/# ls /
abc  boot  etc   lib    media  opt   root  sbin  sys  usr
bin  dev   home  lib64  mnt    proc  run   srv   tmp  var
root@725e0de035c2:/# cat /abc
abc
root@725e0de035c2:/# exit

`;

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Comment ça marche ?
    </Heading>
    <div style={{ marginTop: '30px' }}>
      <Terminal
        title="Ubuntu"
        output={[
          '> docker run -it ubuntu bash',
          pullOutput,
          ubuntuBash,
          'root@a82ebe753dc6:/# nano',
          'bash: nano: command not found',
          'root@a82ebe753dc6:/# apt-get update',
          'root@a82ebe753dc6:/# apt-get install nano',
          'root@a82ebe753dc6:/# nano',
          'exit',
          dockerCommit,
          '> docker run --name nano -it clement/ubuntu-with-nano nano',
          dockerExec,
          '> docker stop nano'
        ]}
      />
    </div>
  </Slide>
);
