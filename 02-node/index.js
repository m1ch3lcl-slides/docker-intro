const express = require('express');

const app = express();

const name = 'World';
// const name = process.env.NAME;

// app.get('/hi', (req, res) => {
//   require('http').get('http://hi:8000/', response => {
//     res.status(response.statusCode);
//     response.pipe(res);
//   });
// });

app.use((req, res) => {
  console.log(req.url);
  res.send(`
    <html>
      <h1>Hello ${name}!</h1>
      <div>Bravo, jeune padawan ! Ton premier serveur Node légèrement virtualisé fonctionne !</div>
    </html>
  `);
});

app.listen(3000, () => console.log('server is listening on port 3000'));
