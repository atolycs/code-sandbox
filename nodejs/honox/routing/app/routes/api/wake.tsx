import { createRoute } from 'honox/factory'

export default createRoute((c) => {
  const name = c.req.query("name") ?? 'Hono' 
  return c.render(
    <div class="wake_message">
      <h1> Wake On Lan </h1>
      Welcome back, {name}

    </div>,
    { title: "Wake On Lan Menu" }
  )
})