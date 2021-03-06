import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css";

function Home()
{
  const router = useRouter();
  const handleclick = () =>{
    router.push('/doc');
  }
  return (
    <div>
    
      <h1>This is Home Page</h1>
      <Link href="/doc">
        <a><h3 className={styles.menu}>go to about page</h3></a>
      </Link>
      <Link href="/blog">
        <a><h3>go to blog page</h3></a>
      </Link>
      <Link href="/post">
         <a><h3>go to Post page</h3></a>
      </Link>
      <Link href="/users">
         <a><h3>go to User List</h3></a>
      </Link>
      
      <button onClick={handleclick}>Form Submit</button>

    </div>
  );
}
export default Home;