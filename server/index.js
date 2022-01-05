import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import socketIO from 'socket.io';
import gracefulShutdown from 'http-graceful-shutdown';

import { PORT } from './config/variables';
import defaultRouter from './controllers/default';

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = socketIO(server, {
    transports: ['polling'],
    cors: {
        cors: {
            // TODO: May be change to strict check
            origin: "*"
        }
    }
})

io.on('connection', (socket) => {
    console.log('Connected established');

    socket.on('message', (message) => {
        console.log(`message from ${socket.id} : ${message}`);
    })

    socket.on('disconnect', () => {
        console.log(`socket ${socket.id} disconnected`);
    })
})

export {io};

app.use(express.json());
app.use(cors());

// Health check endpoint
app.get('/health', (req, res) => res.send('Healthy'));

// For everything else serve with router
app.use('/', defaultRouter);

server.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
})

// Handle SIGINT or SIGTERM and drain connections
gracefulShutdown(server);