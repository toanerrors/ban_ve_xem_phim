import React from "react";
import Ve from "../Ve";

export default function Slide({ data }) {
  return (
    <li className="phimhot__slide">
      <div className="phimhot__image">
        <img className="phimhot__figure" src={data.hinhAnh} alt="" />
        <div className="phimhot__titleWrap">
          <h3 className="phimhot__title">{data.tenPhim}</h3>
          <p className="phimhot__description">{data.moTa}</p>
          <Ve phim={data} />
        </div>
      </div>
    </li>
  );
}
