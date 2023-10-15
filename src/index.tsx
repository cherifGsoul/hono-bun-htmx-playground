import { Hono } from 'hono'
import blog from "./blog";
import { serveStatic } from 'hono/bun'
import Home from './pages/Home'
import Blog from "./pages/Blog";

const app = new Hono()

app.use('/public/*', serveStatic({ root: '../' }))

app.get('/', (c) => c.html(<Home />))
app.route("/blog", blog)

export default app
