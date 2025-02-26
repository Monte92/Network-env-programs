import Greeting from "./components/Greetings"
import ThemeToggle from "./components/ThemeToggle"
import LoginMessage from "./components/LoginMessage"
import TodoList from "./components/TodoList"


function App() {

const activities = ['Study', 'Eat', 'Sleep', 'Walk', 'Read', 'Relax'];

  return (
    <div>
      <p>Hello World</p>
      <Greeting name='Lauri'/>
      <ThemeToggle />
      <LoginMessage isLoggedIn={false} />
      <TodoList todos={activities}/>
    </div>
  )
}

export default App
