import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/index";
import AddItem from "./Features/Dashboard/index";
import Detail from "./Features/Dashboard/Handler";
import ChatAi from "./components/ChatAi";
import Login from "./components/Login";  

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

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
