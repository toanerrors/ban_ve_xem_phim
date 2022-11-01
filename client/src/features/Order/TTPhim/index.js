import React from 'react'

export default function TTPhim({ phim }) {

    
  const formatDate = (date) => {
    const dateFormat = new Date(date);
    return dateFormat.toLocaleDateString();
  };
  return (
    <div>
        <h1>Thông tin:</h1>
        <div className="order">
          <img className="order__img" src={phim.hinhAnh} alt={phim.hinhAnh} />
          <div className="order__content">
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

            <div>
              <h3>Nội dung phim</h3>
              <p>{phim.moTa}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
