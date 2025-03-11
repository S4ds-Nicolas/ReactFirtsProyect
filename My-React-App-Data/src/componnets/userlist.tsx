import { useEffect, useState } from "react";

const UserList = ()=>{

    const [Users,setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((Response) => Response.json())
        .then((data) => setUsers(data))
        .catch((Error) => console.error("Error obteniendo data: ",Error))
    }, [])

    return(
        <div>
            <h1>Lista de usuarios</h1>
            <ul>
            {
                Users.map((user) =>(
                    <li key={user.id}>{user.name}
                    </li>
                ))
            }
            </ul>
        </div>
    )

}

export default UserList;