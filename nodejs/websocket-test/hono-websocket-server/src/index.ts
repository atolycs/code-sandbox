import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { createNodeWebSocket } from "@hono/node-ws"


const app = new Hono()

const { injectWebSocket, upgradeWebSocket } = createNodeWebSocket({ app })


const wsApps = app.get('/ws', upgradeWebSocket((c) => {

  return {
    onMessage: (event, ws) => {
      ws.send(`You said: ${event.data}`)
    },
    onClose: () => {
      console.log('Connection closed')
    }
  }
}))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 3000
console.log(`Server is running on port ${port}`)

export type WebSocketApp = typeof wsApps

serve({
  fetch: app.fetch,
  port
})
