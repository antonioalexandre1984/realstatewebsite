import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PropertyDetails } from "./pages/PropertyDetails";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/house/:id" element={<PropertyDetails />} />
        </Routes>
    )
}