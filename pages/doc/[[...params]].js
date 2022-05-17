import { useRouter } from 'next/router';
function Document()
{
    const router = useRouter();
    const params = router.query.params || '';
    return(
        <div><h1>this is doccument page {params[0]}</h1></div>
    );
}

export default  Document;