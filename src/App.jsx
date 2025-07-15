import Home from "./components/pages/home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./components/partials/PageNotFound";
import RoadBiking from "./components/pages/roadBiking/Roadbiking";
import MountainBiking from "./components/pages/mountainBiking/MountainBiking";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/road-biking" element={<RoadBiking />}></Route>
          <Route path="/mountain-biking" element={<MountainBiking />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
