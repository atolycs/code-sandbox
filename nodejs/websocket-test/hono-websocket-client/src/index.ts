import { hc } from "hono/client"


const client = hc('http://localhost:8787')


const ws = client.ws.$ws(0)

ws.addEventListener('open', () => {
  console.log('connected')
  ws.send('Hello')
})
