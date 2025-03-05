interface CardsProps{
    title:String;
    Description:String;
}


const Card = ({title,Description}:CardsProps) =>{
    return(
        <section>
            <h2>{title}</h2>
            <p>{Description}</p>
        </section>
    )
}

export default Card;