import './App.css';
import ToggleButton from "./components/toggleButton";
import NameForm from "./components/nameForm";
import CounterWithEffect from './components/counterWithEffect';


function App() {
  
  return(
    <div>
      <CounterWithEffect></CounterWithEffect>
      <ToggleButton></ToggleButton>
      <NameForm></NameForm>
    </div>

  )
}

export default App
