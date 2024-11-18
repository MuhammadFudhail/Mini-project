import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/index";
import AddItem from "./Dashboard/Add-item";
import Detail from "./Dashboard/Detail-item";
import ChatAi from "./Dashboard/ChatAi";
import Login from "./Dashboard/Login";  // Komponen Login yang Anda buat sebelumnya

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Menyimpan status login

  return (
    <>
      <Routes>
        {/* Halaman utama bisa diakses tanpa login */}
        <Route path="/" element={<Home />} />

        {/* Halaman login */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Proteksi halaman CRUD dan ChatAi */}
      
        
        <Route 
          path="/Chat" 
          element={isLoggedIn ? <ChatAi /> : <Login setIsLoggedIn={setIsLoggedIn} />} 
        />

        <Route 
          path="/tambah-produk" 
          element={isLoggedIn ? <AddItem /> : <Login setIsLoggedIn={setIsLoggedIn} />} 
        />
        <Route 
          path="/product/:id" 
          element={isLoggedIn ? <Detail /> : <Login setIsLoggedIn={setIsLoggedIn} />} 
        />
        
      </Routes>
    </>
  );
}

export default App;
