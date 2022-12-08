import './App.css';
import Navbar from './components/Navbar/Navbar';
import "@fontsource/poppins";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Navbar />
<Routes>
      <Route index element={<Home />}></Route>
      </Routes>
Byteloop
</BrowserRouter>
    </div>
  );
}

export default App;
