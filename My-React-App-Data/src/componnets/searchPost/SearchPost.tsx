import { useEffect, useState } from "react";

const SearchPost = () =>{
    const[query,setQuery] = useState("");
    const[post,setPost] = useState([]);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
        .then((Response) => Response.json())
        .then((data) => setPost(data))
        .catch((Error) => console.error("Error obteniendo data: ",Error))
    }, [query])


    return(
        <div>
            <h1>Lista de usuarios</h1>
            <input type="text" placeholder="Buscar por titulo" value={query} onChange={(event) => setQuery(event.target.value)}></input>
            <ul>
            {
                post.map((post) =>(
                    <li key={post.id}>{post.title}
                    </li>
                ))
            }
            </ul>
        </div>
    )
   

}


export default SearchPost