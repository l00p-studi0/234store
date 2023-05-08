import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Item from "./pages/Item/Item";
import Info from "./pages/Cart/Info";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="shop/:id" element={<Item />}></Route>
        <Route path="shipping" element={<Info />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
