import Link from "next/link";
import Header from "../../components/header";
function PostList({data})
{
    return(
        <div><h1><u>Post List</u></h1>
        
        {data.map(post =>{
            return(
                <div key={post.id}>
                   <Link href={`/post/${post.id}`} passHref>
                   <a><h1>{post.title}</h1></a>
                   </Link>
                   
                   <p>{post.body}</p>
                   <hr/>
                </div>
            )
        })}
        </div>
        
    );
}

export async function getStaticProps(ctx)
{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
        props: {
            data: data,
        },
    }
}

PostList.getLayout = function getLayout(page)
{
    return (
        <div>
            <Header/>
            {page}
        </div>
    );
}

export default PostList;