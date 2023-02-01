import Navbar from "./components/Navbar/Navbar";
import Form from "./Form";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, RouterProvider, Routes } from "react-router-dom";

function App() {
    return (
       <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/generator" element={<Form />} />


            </Routes>

        </div>
       </>
    )

}

export default App