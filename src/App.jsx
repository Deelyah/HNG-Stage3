import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Theheader from "./components/TheHeader";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Theheader /> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
