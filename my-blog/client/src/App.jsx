// import './App.css'
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Projects from './pages/Projects'
import Header from "./components/Header"
import { Toaster } from "react-hot-toast"
import FooterComp from "./components/FooterComp"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Toaster position="top-center" />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/sign-in"
            element={<SignIn />}
          />
          <Route
            path="/sign-up"
            element={<SignUp />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  )
}

export default App
