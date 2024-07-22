import { createServer } from 'node:http'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import express from 'express'
import { Server } from 'socket.io'

import type { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from '../types/socket'

const app = express()
const server = createServer(app)

const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server, {
  connectionStateRecovery: {},
})

const path = import.meta.url
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(fileURLToPath(path))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})

io.on('connection', socket => {
  // eslint-disable-next-line no-console
  console.log('a user connected')

  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log('user disconnected')
  })
})

server.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server running at http://localhost:3000')
})
