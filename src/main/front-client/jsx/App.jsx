import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home";
import PageNotFoud from "./page-not-foud";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route errorElement={PageNotFoud} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

