import { useRouter } from 'next/router';
function BlogDetails()
{
    const router = useRouter();
    const blogId = router.query.blogId;
    return(
        <div>
          <h1>this is blogpage for blog id : {blogId}</h1>
        </div>
    );
}

export default BlogDetails;