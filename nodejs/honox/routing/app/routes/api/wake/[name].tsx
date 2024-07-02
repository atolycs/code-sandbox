import { createRoute } from 'honox/factory'

export default createRoute((c) => {
  const name = c.req.query("name") 

  return c.render(
    <div class="wake_message">
      (^_^) &lt; Sent magic packet to device {name} on Broadcast IP 255.255.255.255!:
      
    </div>,
    { title: "Sent Magic Packet" }
  )
})