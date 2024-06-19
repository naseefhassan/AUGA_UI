import { Route, Routes } from "react-router-dom";
import CommonRouter from "./Router/CommonRouter";

function App() {
  return (
      <Routes>
        <Route path="/*" element={<CommonRouter />}></Route>
      </Routes>
  );
}

export default App;
