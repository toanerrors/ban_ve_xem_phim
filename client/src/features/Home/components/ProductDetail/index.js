import React from "react";
import Popup from "reactjs-popup";
import "./index.scss";
import Ve from "../Ve";

export default function ProductDetail({ phim }) {
  const handleShowTrailer = () => {
    var trailer = document.querySelector(".trailerproductdetail iframe");
    trailer.src = phim.trailer || "https://www.youtube.com/embed/mANIqat5IC8";
    trailer.style.display = "block";
  };
  const formatDate = (date) => {
    const dateFormat = new Date(date);
    return dateFormat.toLocaleDateString();
}
  return (
    <Popup trigger={<button>Xem chi tiết</button>} modal>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <h1>Thông tin:</h1>
          <div className="product">
            <img
              className="product__img"
              src={phim.hinhAnh}
              alt={phim.hinhAnh}
            />
            <div className="product__content">
              <h3>{phim.tenPhim}</h3>
              <p>
                <b>Đạo diễn: </b>
                {phim.daoDien}
              </p>
              <p>
                <b>Diễn viên: </b>
                {phim.dienVien}
              </p>
              <p>
                <b>Thể loại: </b>
                {phim.theLoai}
              </p>
              <p>
                <b>Khởi chiếu: </b>
                {formatDate(phim.ngayKhoiChieu)}
              </p>
              <p>
                <b>Thời lượng: </b>
                {phim.thoiLuong}
              </p>
              <p>
                <b>Đánh giá: </b>
                {phim.danhGia}
              </p>
              <p>
                <b>Nhà sản xuất: </b>
                {phim.nhaSanXuat}
              </p>
              <p>
                <b>Trạng thái: </b>
                {phim.trangThai}
              </p>
              <Ve phim={phim} />
            </div>
          </div>
          <div className="trailerproductdetail">
            <button onClick={handleShowTrailer}>Trailer</button>
            <iframe
              className=""
              height="315"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div>
            <h3>Nội dung phim</h3>
            <p>{phim.moTa}</p>
          </div>
        </div>
      )}
    </Popup>
  );
}
