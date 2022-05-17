import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";


function User()
{
    const [users, setUsers] = useState([]); 
    
    const [user, setUser] = useState("");                               //client side rendering

    useEffect(()=>{
        fetch('http://localhost:3000/api/users')
        .then((res)=>res.json())
        .then((data)=>setUsers(data));
    },[users]);

    


    // const loadAllData =() =>{
    //     fetch('http://localhost:3000/api/users')
    //     .then(res => res.json())
    //     .then(data => setUsers(data));
    // }

    const handleAddUser =() =>{
        fetch('http://localhost:3000/api/users',{
            method: "POST",
            body: JSON.stringify({user}),
            headers: {"Content-Type": "application/json"},
        });
    }

    const handledltbtn =(id) =>{
        fetch(`http://localhost:3000/api/users/${id}`,{
            method: "DELETE",
        })
    }

    return(
        <div>
          <h2>All Users</h2>
          <hr/>

          <div>
          <input onChange={(e) => setUser(e.target.value)} type="text"/>
          <button onClick={handleAddUser}>Add User</button>
          </div>

          
          {
              users.map(user =>{
                  return(
                    <div key={user.id}>
                      <Link href={`/users/${user.id}`} >
                      <a><h3>{user.id}: {user.name}</h3></a>
                      </Link>
                      <Link href={`/users/edit/${user.id}`} >
                      <a><button>Edit</button></a>
                      </Link>
                      <button onClick={()=> handledltbtn(user.id)}>Delete</button>
                      </div>
                  )
              })
          }
        </div>
    );
}

// export async function getServerSideProps(ctx)
// {
//     const res = await fetch("http://localhost:3000/api/users");
//     const data = await res.json();
//     return{
//         props: {
//             users: data
//         }
//     }
// }

export default User;