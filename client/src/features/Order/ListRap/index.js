import React from "react";
import Select from "react-select";
import './index.scss'


const lichchieu = [
  { value: "8", label: "8:00" },
];

export default function ListRap({ raps, data, setData }) {
  const [selected, setSelected] = React.useState();

  const handleChange = (index) => {
    setSelected(index);

    setData({ ...data, rap: raps[index]._id });
  };

  const handleChangeLichChieu = (index) => {
    setData({ ...data, lichChieu: index.value, tenRap: raps[selected].tenRap });
  };

  return (
    <div className="chonrap">
      <h1>Danh sách rạp</h1>
      <div className="order__raps">
        {raps.map((rap, index) => {
          return (
            <div onClick={(e) => handleChange(index)} className="order__raps__rap" key={index}>
              <div className="order__raps__rap__name">
                <h1>{rap.tenRap}</h1>
                <p>
                  <b>Địa chỉ: </b>
                  {rap.diaChi}
                </p>
                <p>
                  <b>Số điện thoại: </b>
                  {rap.soDienThoai}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {
        selected !== undefined && <Select onChange={handleChangeLichChieu} id="lichchieu" options={lichchieu} />
      }
    </div>
  );
}
