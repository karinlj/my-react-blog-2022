import Navbar from "./layout/Navbar";
import HeaderBar from "./layout/HeaderBar";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import PostDetails from "./components/PostDetails";
import NotFound from "./components/NotFound";

//calling it Router
function App() {
  const [isBtnOpen, setIsBtnOpen] = useState(false);

  const toggleOpen = () => {
    setIsBtnOpen(!isBtnOpen);
  };

  useEffect(() => {
    // console.log("isBtnOpen App", isBtnOpen);
  }, [isBtnOpen]);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="menu">
          <HeaderBar isBtnOpen={isBtnOpen} toggleOpen={toggleOpen} />
          <Navbar isBtnOpen={isBtnOpen} toggleOpen={toggleOpen} />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/posts/:post_id" element={<PostDetails />} />
            {/* catch any other route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
