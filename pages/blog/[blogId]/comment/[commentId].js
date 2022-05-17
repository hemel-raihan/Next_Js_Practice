
import { useRouter } from 'next/router';
function CommentDetails()
{
    const router = useRouter();
    const {blogId,commentId} = router.query;
    return(
        <div>
        <h2>Comment Details </h2>
        <p>blog Id : {blogId}</p>
        <p>Comment Id : {commentId}</p>
        </div>
    );
}

export default CommentDetails;