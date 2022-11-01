import React from "react";

export default function CardShowing({ phim, config}) {
  return (
    <div style={{left: config.left, zIndex: config.zIndex}} className="items">
      <img src={phim.hinhAnh} alt="" />
      <p className="tag">{phim.tenPhim}</p>
      <p>
        <i className="price">{phim.theLoai}</i>
      </p>
    </div>
  );
}
