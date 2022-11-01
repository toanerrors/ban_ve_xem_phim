import React from "react";
import { Link } from "react-router-dom";

export default function LSide({ data }) {
  return (
    <div className="Lslide">
      <div className="Lslide-content">
        <h2>{data.tieuDe.slice(0, 25)}</h2>
        <p>{data.noiDung.slice(0, 50) + '...'}</p>
        <div className="button">
          <Link to={`/tintuc/` + data._id}>
            <p>Xem Thêm</p>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
