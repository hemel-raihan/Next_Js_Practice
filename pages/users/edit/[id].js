import { useState } from "react";

function Edit({user})
{

    const [users, setUsers] = useState([]);

    const handleEditUser =(id) =>{
        fetch(`http://localhost:3000/api/users/edit/${id}`,{
            method: "PUT",
            body: JSON.stringify({user}),
            headers: {"Content-Type": "application/json"},
        });
    }

    return(
        <div>
        <h1>User Edit</h1>
        <input  value={user.name} type="text"/>
        <button onClick={()=> handleEditUser(user.id)}>Edit User</button>
        </div>
    )
}

export async function getServerSideProps(ctx)
{
    const {params} = ctx;
    const res = await fetch(`http://localhost:3000/api/users/edit/${params.id}`);
    const data = await res.json();
    return{
        props:{
            user:data
        }
    }
}

export default Edit;