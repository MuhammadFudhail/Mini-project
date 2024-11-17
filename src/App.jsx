import { Route, Routes } from "react-router-dom";
import Home from "./Dashboard/index";
import AddItem from "./Dashboard/Add-item";
import Detail from "./Dashboard/Detail-item";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tambah-produk" element={<AddItem />} />
        <Route path="/product/:id" element={<Detail />} />
       
      </Routes>
    </>
  );
}

export default App;
