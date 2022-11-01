import React from "react";
import "./index.scss";
import ProductCard from "./ProductCard";

export default function Product({ datas, search }) {
  const filteredDatas = datas.filter((data) => {
    if(search === "") return datas;
    return data.tenPhim.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="caigodoo">
      <h1 className="titleProduct">Phim đang chiếu: </h1>
      <div className="products">
        {filteredDatas.map((phim, index) => {
          return <ProductCard key={index} phim={phim} />;
        })}
      </div>
    </div>
  );
}
