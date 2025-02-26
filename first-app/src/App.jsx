import Greeting from "./components/Greetings"
import ThemeToggle from "./components/ThemeToggle"

function App() {

  return (
    <div>
      <p>Hello World</p>
      <Greeting name='Lauri'/>
      <ThemeToggle />
    </div>
  )
}

export default App
