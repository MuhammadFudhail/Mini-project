import { Route, Routes } from "react-router-dom"
import Home from "./Dashboard/Index"
import AddItem from "./Dashboard/Add-item"
import Detail from "./Dashboard/Detail-item"




function App() {
 

  return (
    <>
     
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tambah-produk" element={<AddItem/>}></Route>
        <Route path="/product/:id" element={<Detail/>}></Route>
     </Routes>
    
    </>
  )
}

export default App
