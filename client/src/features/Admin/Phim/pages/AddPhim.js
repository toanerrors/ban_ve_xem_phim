import PhimApi from 'api/phimApi';
import React from 'react'
import FormAddPhim from '../components/FormAddPhim'

export default function AddPhim() {
  const [isLoading, setIsLoading] = React.useState(false)

  const handleAddPhim = async (value) => {
    setIsLoading(true);
    if (
      value.maPhim === '' ||
      value.tenPhim === "" ||
      value.daoDien === "" ||
      value.dienVien === "" ||
      value.theLoai === "" ||
      value.ngayKhoiChieu === "" ||
      value.thoiLuong === "" ||
      value.moTa === "" ||
      value.hinhAnh === "" ||
      value.trailer === ""
    ) {
      alert("Vui lòng nhập đầy đủ thông tin");
      setIsLoading(false);
      return;
    }

    try {
      const response = await PhimApi.addPhim(value);
      setIsLoading(false);
      alert(response.message);
      window.location.reload();
    } catch (error) {
      alert(error.response.data.message);
      setIsLoading(false);
      return;
    }
    
  };


  return (
    <div>
      <FormAddPhim handleAddPhim={handleAddPhim} isLoading={isLoading} />
    </div>
  )
}
