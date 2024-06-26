import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"

// layouts
import RootLayouts from "./layouts/RootLayout"
import HelpLayout from "./layouts/HelpLayout"
import Faq from "./pages/help/Faq"
import Contact from "./pages/help/Contact"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts/>}>

      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />

      <Route path="help" element={<HelpLayout/>} >
        <Route path="faq" element={<Faq/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>

    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
