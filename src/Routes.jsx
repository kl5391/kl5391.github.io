import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
    
    return (
        <Routes>
            <Route index element={<Home />}/>
            <Route path="pages">
                <Route path="projects" element={<Projects/>} />
            </Route>
        </Routes>
        )
}