import express from 'express';
import * as Path from 'node:path';

import fruitRoutes from './routes/fruits';
import userRoutes from './routes/users';
import insultRoutes from '../server/routes/insult.ts';

const server = express();

server.use(express.json());

server.use('/api/v1/fruits', fruitRoutes);
server.use('/api/v1/users', userRoutes);
server.use('/api/v1/insults', insultRoutes);

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')));
  server.use('/assets', express.static(Path.resolve('./dist/assets')));
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'));
  });
}

export default server;
