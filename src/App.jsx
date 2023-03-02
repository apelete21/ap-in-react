import { BrowserRouter } from "react-router-dom"
import ClientRoutes from "./routes/Routes"
import "./assets/style/main.css"

function App() {

  return (
    <BrowserRouter>
      <ClientRoutes />
    </BrowserRouter>
  )
}

export default App
