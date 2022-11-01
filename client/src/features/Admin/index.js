import React, { useState } from "react";
import Select from "react-select";
import Phim from "./Phim";
import AddPhim from "./Phim/pages/AddPhim";
import TinTuc from "./TinTuc";

const options = [
  { value: "1", label: "Danh sách phim" },
  { value: "2", label: "Thêm phim" },
  { value: "3", label: "Quản lý tin tức" },
  { value: "4", label: "Quản lý người dùng" },
  { value: "5", label: "Quản lý lịch chiếu" },
  { value: "6", label: "Quản lý vé" },
  { value: "7", label: "Quản lý báo cáo" },
  { value: "8", label: "Quản lý thống kê" },
  { value: "9", label: "Quản lý thể loại" },
  { value: "10", label: "Quản lý địa điểm" },
];
export default function ChucNang() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("Vui lòng đăng nhập");
    window.location.href = "/login";
  }

  if(user.role === 'user'){
    alert('Bạn không có quyền truy cập vào chức năng này');
    window.location.href = '/';
  }

  return (
    <div>
      <Select onChange={handleChange} options={options} />
      {
        selectedOption.value === "1"  ? <Phim /> :
        selectedOption.value === "2" ? <AddPhim /> :
        selectedOption.value === "3" ? <TinTuc /> :
        <div>Chức năng đang được phát triển</div>
      }
    </div>
  );
}
