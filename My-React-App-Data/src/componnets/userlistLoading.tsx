import { useEffect, useState } from "react";

const userlistLoading = ()=>{

    const [Users,setUsers] = useState([]);
    const [isLoading,setisLoading] = useState(true);
    const [error,setError] = useState(null);



    useEffect(() => {
        const fetchUsers = async ()=>{
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response) {
                    throw new Error("error al obtener los datos")
                }
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                setError(error)
            }finally{
                setisLoading(false);
            }
           
        }

        fetchUsers();

    }, [])

    if(isLoading){
        return<p>Cargando...</p>
    }

    if(error){
        return<p>Error: {error}</p>
    }

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

export default userlistLoading;