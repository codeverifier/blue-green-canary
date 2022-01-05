import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import FlipComponent from "./FlipComponent";
import { APP_SOCKETIO_SERVER_ADDR } from './AppConfig';

export default function RequestCounter({ tickerColor }) {
    const [count, setCount] = useState(1)

    useEffect(() => {
        const socket = io(`ws://${APP_SOCKETIO_SERVER_ADDR}`)

        socket.on('connnection', () => {
            console.log('Connected to server');
        })

        socket.on('counter-inc', (newCount) => {
            setCount(newCount.reqCount)
        })

        socket.on('message', (message) => {
            console.log(message);
        })

        socket.on('disconnect', () => {
            console.log('Socket disconnecting');
        })
    }, [])

    return (
        <div style={{ margin: "1em" }}>
            {count &&
                <FlipComponent id={tickerColor} value={count} />
            }
        </div>
    )
}