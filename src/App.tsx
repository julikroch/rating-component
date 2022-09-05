import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/Form';
import ThankYou from "./components/ThankYou";
import { StarI } from "./types";

function App() {
  const [msg, setMsg] = useState<StarI>()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form setMsg={setMsg} msg={msg} />} />
        <Route path="thank-you" element={<ThankYou msg={msg} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
