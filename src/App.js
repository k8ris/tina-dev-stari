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
  const artPieces = require('./portofolio/art')();
  artPieces.map(img => img.location ="./img/"+img.location );
  artPieces.map(img => img.locationFullSize = "./img/"+img.locationFullSize);
  const homeImage = artPieces[Math.floor(Math.random()*artPieces.length)];

  return (
    <BrowserRouter basename={window.location.pathname || ''}>     
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home images={homeImage.location} />}/>
          <Route path="paintings" element={<Paintings images={artPieces}/>} />
          <Route path="180x120" element={<S180x120 images={artPieces} />} />
          <Route path="120x100" element={<S120x100 images={artPieces} />} />
          <Route path="140x90" element={<S140x90 images={artPieces} />} />
          <Route path="work-on-paper" element={<WorkOnPaper images={artPieces} />} />
          <Route path="ceramics" element={<Ceramics images={artPieces} />} />
          <Route path="bio" element={<Bio images={artPieces}/>} />
          <Route path="shop" element={<Shop/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}