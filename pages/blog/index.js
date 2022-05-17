import Link from "next/link";
function index({blogId = 4})
{
    return( 
        <div>
           <Link href="/blog/1">
             <a><h1>blog1</h1></a>
           </Link>
            
           <Link href="/blog/2">
             <a><h1>blog2</h1></a>
           </Link>

           <Link href={`/blog/${blogId}`}>
             <a><h1>blog3</h1></a>
           </Link>
        </div>
    );
}

export default index;