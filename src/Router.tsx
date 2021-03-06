import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

//interface IRouterProps {}

function Router(){
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/:id/*" element={<Coin/>} />
      <Route path="/" element={<Coins />} />
    </Routes>
  </BrowserRouter>
}
export default Router;