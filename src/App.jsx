import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"

// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"

// layouts
import RootLayouts from "./layouts/RootLayouts"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts/>}>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
    </Route>
  )
)

function App() {
  return (
    
      <RouterProvider router={router} />

  )
}

export default App
