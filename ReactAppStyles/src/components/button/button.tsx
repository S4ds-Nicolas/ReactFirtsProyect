import styled from "styled-components"

interface Button {
    blue:string;
    children:string;
}

const StyledButton = styled.button`
    background-color: ${(props) => props.blue ? "blue" :"gray"};
`; 

const Button = ({children,blue}) => {

    return (
        <StyledButton blue = {blue}>{children}</StyledButton>
    )

}

export default Button;