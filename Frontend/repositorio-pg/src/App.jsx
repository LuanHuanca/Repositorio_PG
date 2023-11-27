import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import BusquedaScreen from "./screens/BusquedaScreen";
import TarjetaTesisScreen from "./screens/TarjetaTesisScreen";
import Appbar from "./components/organismos/Appbar";
import LoginScreen from "./screens/LoginScreen";


function App() {
  const location = useLocation();
  const hideNavBarRoutes = [
    "/login",
  ];
  // const [selectedItems, setSelectedItems] = useState([]);
  // const addItem = (item) => {
  //   setSelectedItems([...selectedItems, item]);
  // };
  // const [selectedMesa,setSelectedMesa] = useState([]);
  // const addMesa = (mesa)=>{
  //   setSelectedMesa([...selectedMesa,mesa]);
  // }
  return (
    <div className="App">
        {!hideNavBarRoutes.includes(location.pathname) && <Appbar/>}
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/busqueda" element={<BusquedaScreen/>}/>
        <Route path="/tarjetaTesis" element={<TarjetaTesisScreen/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
      </Routes>
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