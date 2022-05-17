import Link from "next/link";
function Error()
{
    return(
        <div>
        <h1>This is error 404 page!!!!!</h1>
        <Link href="/"><a>Home</a></Link>
        </div>
    );
}
export default Error;