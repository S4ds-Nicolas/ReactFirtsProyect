
interface StaticComponent{
    index:number;
    item:string;

}

const StaticComponent = () => {
    const items = ["manzana", "papa"]

    return(
        <ul>
            {
                items.map((item,index) =>(
                    <li key={index}>{item}
                    </li>
                ))
            }
        </ul>
    )

}

export default StaticComponent;