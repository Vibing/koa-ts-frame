import 'reflect-metadata';
import app from 'app/app';
import { useKoaServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import expands from 'expands';
import serverConfig from 'configs/server';

expands(app);
useContainer(Container);

const server = useKoaServer(app, serverConfig);

server.listen(3000);
