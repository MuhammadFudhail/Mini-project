import { Route, Routes } from "react-router-dom";
import Home from "./Dashboard/index";
import AddItem from "./Dashboard/Add-item";
import Detail from "./Dashboard/Detail-item";
// import Chat from "./Dashboard/ChatAi";
import ChatAi from "./Dashboard/ChatAi";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tambah-produk" element={<AddItem />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/Chat" element={<ChatAi />} />
      </Routes>
    </>
  );
}

export default App;