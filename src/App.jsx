import { Route, Routes } from "react-router-dom"
import Home from "./Dashboard/Index"
import AddItem from "./Dashboard/Add-item"




function App() {
 

  return (
    <>
     
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tambah-produk" element={<AddItem/>}></Route>
     </Routes>
    
    </>
  )
}

export default App
