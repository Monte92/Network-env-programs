import Greeting from "./components/Greetings"
import ThemeToggle from "./components/ThemeToggle"
import LoginMessage from "./components/LoginMessage"

function App() {

  return (
    <div>
      <p>Hello World</p>
      <Greeting name='Lauri'/>
      <ThemeToggle />
      <LoginMessage isLoggedIn={false} />
    </div>
  )
}

export default App
