import React from "react";
import ProductDetail from "../ProductDetail";
import Ve from "../Ve";
import "./index.scss";

export default function ProductCard({ phim }) {
    const { tenPhim, hinhAnh} = phim;

  return (
    <div style={{backgroundImage: `url(${hinhAnh})`}} className="products__column">
      <div className="products__card">
        <div className="products__card-info">
          <h3>{tenPhim}</h3>
          <div className="products__card-info-button">
            <ProductDetail phim={phim} />
            <Ve phim={phim} />
          </div>
        </div>
      </div>
    </div>
  );
}
