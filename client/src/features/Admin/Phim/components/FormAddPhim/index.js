import React, {  } from "react";
import Select from "react-select";
import "./index.scss";

const trangThai = [
  { value: "1", label: "Đang khởi chiếu" },
  { value: "2", label: "Sắp ra mắt" },
  { value: "3", label: "Đã kết thúc" },
]

export default function FormAddPhim({ handleAddPhim, isLoading, phim, handleEdit }) {
  const [tenPhim, setTenPhim] = React.useState(phim ? phim.tenPhim : "");
  const [daoDien, setDaoDien] = React.useState(phim ? phim.daoDien : "");
  const [dienVien, setDienVien] = React.useState(phim ? phim.dienVien : "");
  const [theLoai, setTheLoai] = React.useState(phim ? phim.theLoai : "");
  const [ngayKhoiChieu, setNgayKhoiChieu] = React.useState(phim ? phim.ngayKhoiChieu : Date.now());
  const [thoiLuong, setThoiLuong] = React.useState(phim ? phim.thoiLuong : 0);
  const [moTa, setMoTa] = React.useState(phim ? phim.moTa : "");
  const [optiontrangThai, setOptionTrangThai] = React.useState(1);
  const [hinhAnh, setHinhAnh] = React.useState(phim ? phim.hinhAnh : "");
  const [trailer, setTrailer] = React.useState(phim ? phim.trailer : "");
  const handleTrangThai = (selectedOption) => {
    setOptionTrangThai(selectedOption.value);
  };

  const data = {
    tenPhim,
    daoDien,
    dienVien,
    theLoai,
    ngayKhoiChieu,
    thoiLuong,
    moTa,
    trangThai: trangThai[optiontrangThai - 1].label,
    hinhAnh,
    trailer,
  };

  return (
    <form className="formaddphim">
      <table className="formaddphim__table">
        <tbody>
          <tr>
            <td>Tên phim</td>
            <td>
              <input
                value={tenPhim}
                onChange={(e) => setTenPhim(e.target.value)}
                type="text"
                name="tenPhim"
              />
            </td>
          </tr>
          <tr>
            <td>Đạo diễn</td>
            <td>
              <input
                value={daoDien}
                onChange={(e) => setDaoDien(e.target.value)}
                type="text"
                name="daoDien"
              />
            </td>
          </tr>
          <tr>
            <td>Diễn viên</td>
            <td>
              <input
                value={dienVien}
                onChange={(e) => setDienVien(e.target.value)}
                type="text"
                name="dienVien"
              />
            </td>
          </tr>
          <tr>
            <td>Thể loại</td>
            <td>
              <input
                value={theLoai}
                onChange={(e) => setTheLoai(e.target.value)}
                type="text"
                name="theLoai"
              />
            </td>
          </tr>
          <tr>
            <td>Ngày khởi chiếu</td>
            <td>
              <input
                value={!phim ? ngayKhoiChieu : phim.ngayKhoiChieu}
                onChange={(e) => setNgayKhoiChieu(e.target.value)}
                type="date"
                name="ngayKhoiChieu"
              />
            </td>
          </tr>
          <tr>
            <td>Thời lượng</td>
            <td>
              <input
                value={thoiLuong}
                onChange={(e) => setThoiLuong(e.target.value)}
                type="number"
                name="thoiLuong"
              />
            </td>
          </tr>
          <tr>
            <td>Mô tả</td>
            <td>
              <textarea
                value={moTa}
                onChange={(e) => setMoTa(e.target.value)}
                rows="12"
                name="moTa"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Trạng thái</td>
            <td>
              <Select onChange={handleTrangThai} options={trangThai} />
            </td>
          </tr>
          <tr>
            <td className="hinh">Hình ảnh: {hinhAnh && <img src={hinhAnh} alt=""/>}</td>
            <td>
              Link:
              <input
                value={hinhAnh}
                onChange={(e) => setHinhAnh(e.target.value)}
                type="text"
                name="hinhAnh"
              />
            </td>
          </tr>
          <tr>
            <td className="hinh">Trailer: </td>
            <td>
              <input
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
                type="text"
                name="traler"
              />
            </td>
          </tr>
          <tr>
            <td> {isLoading && <div className="loading">loading...</div>}</td>
            <td>
              {phim ? (
                <button onClick={(e) => {e.preventDefault(); handleEdit(data, phim._id)}}>Cập nhật</button>
              ) : (
                <button onClick={(e) => {e.preventDefault(); handleAddPhim(data)}}>Thêm</button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
