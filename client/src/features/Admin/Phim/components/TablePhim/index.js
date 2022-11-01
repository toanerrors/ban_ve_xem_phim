import React from "react";
import PopupEditPhim from "../PopupEditPhim";
import "./index.scss";

export default function TablePhim({
  phims,
  handleDelete,
  handleEdit,
  isLoading,
  handleReset,
}) {
  const formatDate = (date) => {
    const dateFormat = new Date(date);
    return dateFormat.toLocaleDateString();
  };

  var i = 0;

  return (
    <table>
      <thead className="table-header">
        <tr className="table-header-item">
          <th width="100px">STT</th>
          <th>Tên Phim</th>
          <th>Hình Ảnh</th>
          <th>Ngày Khởi Chiếu</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {phims.map((phim) => (
          <tr className="table-body-item" key={phim._id}>
            <td>{i++}</td>
            <td>{phim.tenPhim}</td>
            <td>
              <img className="table-body-item-img" src={phim.hinhAnh} alt="" />
            </td>
            <td>{formatDate(phim.ngayKhoiChieu)}</td>
            <td>{phim.trangThai}</td>
            <td className="chucnang">
              <button
                onClick={() => handleDelete(phim._id)}
                className="table-body-item-button"
              >
                Xóa
              </button>
              <PopupEditPhim
                isLoading={isLoading}
                handleEdit={handleEdit}
                phim={phim}
              />
              <button className="table-body-item-button"
                onClick={() => handleReset(phim._id)}
              >
                Reset
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
