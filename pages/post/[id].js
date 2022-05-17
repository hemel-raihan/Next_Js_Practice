
function PostDetails({data})
{
    console.log(data);
    return(
        <div>
           <h1>Single Post</h1>
           <h3>{data.title}</h3>
           <p>{data.body}</p>
        </div>
    );
}

export async function getStaticProps(ctx)
{
    const {params} = ctx;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();
    return {
        props:{
            data : data,
        },
    }
}

export async function getStaticPaths()
{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map(post =>{
        return{
            params: {id : `${post.id}`},
        }
    })
    return{
        // paths: [
        //     {params: {id: "1"} }
        // ],
        paths: paths,
        fallback: false
    }
}

export default PostDetails;