import "primereact/resources/themes/lara-dark-purple/theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./Routes";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Silk from "./pages/Silk";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <AppRoutes />
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
