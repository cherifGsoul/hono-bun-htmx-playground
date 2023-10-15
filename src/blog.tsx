import {Hono} from "hono";
import Blog from "./pages/Blog";
import Posts from "./pages/Posts";

const blog = new Hono()

blog.get('/', (c) => c.html(<Blog />))
blog.get('/posts', (c) => c.html(<Posts />))



export default blog