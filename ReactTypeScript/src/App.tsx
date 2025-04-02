import Button from './componenets/Button'
import './App.css'
import Counter from './componenets/Counter'

function greet(name : String) : String {
  return `Hola ${name}` 
}

function App() {
  const handleClick = () => alert("ya estoy chuzado")
  console.log(greet("Teo"))

  return (
    <>
      <Button onclick={handleClick} label="ClickMe"></Button>
      <Counter></Counter>
    </>
  )
}

export default App
