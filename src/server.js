import express from 'express';
import routes from './api/routes.js';

const app = express();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use('/api/', routes);

app.get('/', (req, res) => {
  res.sendFile('/dist/index.html', { root: '.' });
});

app.listen(port, host, () => {
  console.log(`App is listening on http://${host}:${port}...`);
});