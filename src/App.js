import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./portofolio/Home";
import Paintings from "./portofolio/Paintings";
import S180x120 from "./portofolio/S180x120";
import S120x100 from "./portofolio/S120x100";
import S140x90 from "./portofolio/S140x90";
import WorkOnPaper from "./portofolio/WorkOnPaper";
import Ceramics from "./portofolio/Ceramics";
import Bio from "./portofolio/Bio";
import Nav from "./portofolio/Nav";
import NoPage from "./portofolio/NoPage";
import Shop from "./shop/Shop";

export default function App() {
  const artPeaces = require('./portofolio/art')();
  artPeaces.map(e => e.location = './img400/' + e.location);
  
                                 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home images={artPeaces[Math.floor(Math.random()*artPeaces.length)].location} />}/>
          <Route path="paintings" element={<Paintings images={artPeaces}/>} />
          <Route path="180x120" element={<S180x120 images={artPeaces} />} />
          <Route path="120x100" element={<S120x100 images={artPeaces} />} />
          <Route path="140x90" element={<S140x90 images={artPeaces} />} />
          <Route path="work-on-paper" element={<WorkOnPaper images={artPeaces} />} />
          <Route path="ceramics" element={<Ceramics images={artPeaces} />} />
          <Route path="bio" element={<Bio images={artPeaces}/>} />
          <Route path="shop" element={<Shop/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}