import Home from "features/Home";
import Header from "components/Header";
import { Suspense } from "react";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "components/NotFound";
import './App.scss';
import Footer from "components/Footer";
import Admin from "features/Admin";
import Order from "features/Order";
import User from "features/User";
import TinTuc from "features/TinTuc";
import ViewDetailTinTuc from "features/TinTuc/ViewDetailTinTuc";

function App() {
  const [widthScreen, setWidthScreen] = React.useState(window.innerWidth);
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthScreen(window.innerWidth);
    });
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header handleSearch={handleSearch} search={search} />
          <div id="app-main">
            {
              widthScreen < 850 ?
              <div className="chuaphattrien">
                <h1>
                  Site chưa pháp triển cho web màn hình nhỏ, vui lòng phóng to lên nào =))<br></br>
                  Hoặc truy cập bằng máy tính
                </h1>
              </div>
              :
              <Routes>
                <Route path="/" element={<Home search={search} />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/order/:id" element={<Order />} />
                <Route path="/user" element={<User />} />
                <Route path="/tintuc" element={<TinTuc />} />
                <Route path="/tintuc/:id" element={<ViewDetailTinTuc />} />
              </Routes>
            }
          </div>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
