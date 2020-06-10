import 'reflect-metadata';
import { useKoaServer } from 'routing-controllers';
import Koa from 'koa';

const app = new Koa();
// app.use();

const server = useKoaServer(app, {});
