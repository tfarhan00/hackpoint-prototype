import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import AddContent from "./routes/blog/AddContent"
import Home from "./routes/Home"
import UpdateContent from "./routes/blog/UpdateContent"
import UserContent from "./routes/blog/UserContent"
import About from "./routes/About"
import Login from "./routes/Login"
import BlogDetail from "./routes/blog/BlogDetail"
import Layout from "./components/layout/Layout"
import Courses from './routes/Courses'
import Footer from './components/Footer'
import Pricing from "./routes/Pricing"
import Stats from "./routes/Stats"


function App() {

  const ProtectedPage = ({children}) => {
    if (localStorage.getItem("username") == null) {
      return <Navigate to='/login' />
    }
    else {
      return children
    }
  }

  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
          <Routes>
            <Route path="/" element={
              <ProtectedPage>
                <Home />
              </ProtectedPage>
            }/>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/blog/create" element={<AddContent />} />
            <Route path="/blog/update/:iduser" element={<UpdateContent />} />
            <Route path="/blog/:username" element={<UserContent />} />
            <Route path="/blog/details/:iduser" element={<BlogDetail />} />
          </Routes>
          <Footer />
        </Layout>
    </BrowserRouter>
  )
}

export default App
