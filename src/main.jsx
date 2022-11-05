import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import "./index.css";
import Settings from "./pages/Settings";
import SingIn from "./pages/SingIn";
import Gallery from "./pages/Gallery";
import MediaSaved from "./pages/MediaSaved";
import Test from "./pages/test";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/media-saved" element={<MediaSaved />} />
          </Route>
          <Route path="/sing-in" element={<SingIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tst" element={< Test />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
