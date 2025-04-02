type ButtonProps ={
    onclick: () => void;
    label: String;
}


const Button = ({onclick,label}: ButtonProps) =>{
    return <button onClick ={onclick}> {label}</button>
    
}

export default Button;