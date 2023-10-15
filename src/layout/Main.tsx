import {html} from "hono/dist/types/helper/html";

export default function Main(props: {children?: any}) {
    return (
        <html>
            <head>
                <script src={"http://localhost:5173/@vite/client"} type={"module"}></script>
                <script src={"http://localhost:5173/assets/js/main.js"} type={"module"}></script>
            </head>
            <body hx-boost={true}>{props.children}</body>
        </html>
    )
}