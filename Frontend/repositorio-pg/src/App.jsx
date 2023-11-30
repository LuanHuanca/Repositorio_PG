import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import BusquedaScreen from "./screens/BusquedaScreen";
import TarjetaTesisScreen from "./screens/TarjetaTesisScreen";
import Appbar from "./components/organismos/Appbar";
import LoginScreen from "./screens/LoginScreen";
import PerfilScreen from "./screens/PerfilScreen";
import Footer from "./components/organismos/Footer";
import EnvioProyectoScreen from "./screens/EnvioProyectoScreen";

function App() {
  const location = useLocation();
  const hideRoutes = [
    "/login",
  ];

  return (
    <div className="App">
        {!hideRoutes.includes(location.pathname) && <Appbar />}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/busqueda" element={<BusquedaScreen />}/>
        <Route path="/tarjetaTesis" element={<TarjetaTesisScreen />}/>
        <Route path="/login" element={<LoginScreen />}/>
        <Route path="/perfil" element={<PerfilScreen/>} />
        <Route path="/envioProyecto" element={<EnvioProyectoScreen/>} />
      </Routes>
      {!hideRoutes.includes(location.pathname) && <Footer/>}
    </div>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
export default Root;