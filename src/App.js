import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Paintings from "./pages/Paintings";
import S180x120 from "./pages/S180x120";
import S120x100 from "./pages/S120x100";
import S140x90 from "./pages/S140x90";
import WorkOnPaper from "./pages/WorkOnPaper";
import Ceramics from "./pages/Ceramics";
import Bio from "./pages/Bio";
import Shop from "./pages/Shop";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";


export default function App() {
  const artPeaces = require('./pages/art.js')();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home images={artPeaces[Math.floor(Math.random()*artPeaces.length)].location} />}/>
          <Route path="paintings" element={<Paintings images={artPeaces}/>} />
          <Route path="180x120" element={<S180x120 images={artPeaces} />} />
          <Route path="120x100" element={<S120x100 images={artPeaces} />} />
          <Route path="140x90" element={<S140x90 images={artPeaces} />} />
          <Route path="work-on-paper" element={<WorkOnPaper images={artPeaces} />} />
          <Route path="ceramics" element={<Ceramics images={artPeaces} />} />
          <Route path="bio" element={<Bio images={artPeaces}/>} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}