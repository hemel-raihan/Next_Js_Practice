function UserDetails({user})
{
    console.log(user);
    return(
        <div>
        <h1>User Details</h1>

        <h3>{user.name}</h3>
        </div>
    )
}

export async function getServerSideProps(ctx)
{
    const {params} = ctx;
    const res = await fetch(`http://localhost:3000/api/users/${params.userId}`);
    const data = await res.json();
    return{
        props:{
            user:data
        }
    }
}

export default UserDetails;