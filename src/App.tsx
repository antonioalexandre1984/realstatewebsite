import { BrowserRouter } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { HouseContextProvider } from "./components/HouseContext"
import { Router } from "./Router"

function App() {

  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <HouseContextProvider>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </HouseContextProvider>
    </div>

  )
}

export default App
