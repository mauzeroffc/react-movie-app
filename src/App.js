import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from "./routers/Page_1.js";
import Page2 from "./routers/Page_2.js";
import Page3 from "./routers/Page_3.js";

function App() {
  return <BrowserRouter>
            <Routes>
              <Route path="/" element={<Page1 />}/>
              <Route path="/1" element={<Page1 />}/>
              <Route path="/2" element={<Page2 />}/>
              <Route path="/3" element={<Page3 />}/>
            </Routes>
  </BrowserRouter>
}

export default App
