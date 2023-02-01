import Navbar from "./components/Navbar/Navbar";
import Form from "./Form";
import Home from "./components/Home";
import About from "./components/About";
import { Route, RouterProvider, Routes } from "react-router-dom";

function App() {
    return (
       <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />


            </Routes>

        </div>
       </>
    )

}

export default App