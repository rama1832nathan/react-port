import Intro from "./components/Intro"  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Profile from "./components/Profile"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />}/>
          <Route path="/profile" element={<Profile />}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
