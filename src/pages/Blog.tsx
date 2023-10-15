import Main from "../layout/Main";

export default function Blog () {
    return (
        <Main>
            <h1>Welcome to the blog</h1>
            <a href={'/blog/posts'}>Posts</a>
        </Main>
    )
}