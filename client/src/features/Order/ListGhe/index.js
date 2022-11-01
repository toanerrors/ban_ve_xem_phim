import React, { useEffect } from 'react'
import './index.scss'

export default function ListGhe({ ghes, data, handleDatVe }) {
  const [selected, setSelected] = React.useState([]);
  const [tongtien, setTongTien] = React.useState(0);

  selected.forEach(ghe => {
    if(ghe.trangThai !== 'Đã đặt') {
      ghes[ghe].trangThai = 'Đã chọn'; 
    } else {
      alert('Ghế đã được chọn');
    }
  });

  const handleActive = (index) => {
    if(ghes[index].trangThai === 'Đã đặt') {
      alert('Ghế đã được chọn');
      return;
    }

    if (selected.includes(index)) {
      setSelected(selected.filter(ghe => ghe !== index));
      ghes[index].trangThai = 'Trống';
    } else {
      setSelected([...selected, index]);
    }
  };

  useEffect(() => {
    setTongTien(selected.length * 75000);
  }, [selected]);

  return (
    <div className="order__ghes">
        <h3>Danh sách ghế</h3>
        <div className="order__ghes__content">
          {ghes.map((ghe, index) => {
            if(ghe.trangThai === 'Trống') {
              return (
                <div onClick={(e) => handleActive(index)} className="order__ghes__content__ghe" key={index}>
                  <div className="order__ghes__content__ghe__name">
                    {ghe.maGhe}
                  </div>
                </div>
              );
            } else if(ghe.trangThai === 'Đã đặt') {
              return (
                <div onClick={(e) => handleActive(index)} className="order__ghes__content__ghe damua" key={index}>
                  <div className="order__ghes__content__ghe__name ">
                    {ghe.maGhe}
                  </div>
                </div>
              );
            } else {
              return (
                <div onClick={(e) => handleActive(index)} className="order__ghes__content__ghe dachon" key={index}>
                  <div className="order__ghes__content__ghe__name ">
                    {ghe.maGhe}
                  </div>
                </div>
              );
            }
            })}
        </div>
        <div className='loaighe'>
          <div className='loaighe__item'>
            <div className='ghe ghetrong'>
              Ghế trống
            </div>
            <div className='ghe damua'>
              Ghế có người
            </div>
            <div className='ghe ghechon'>
              Ghế đã chọn
            </div>
          </div>
        </div>

        <div className="order__ghes__content__btn">
          <div className='thongtin'>
            <h3>Thông đã lựa chọn: </h3>
            <p><b>Tên phim: </b>{data.tenphim}</p>
            <p><b>Rạp: </b>{data.tenRap}</p>
            <p><b>Giờ chiếu: </b>{data.gioChieu}</p>
            <p><b>Số ghế: </b>{selected.length}</p>
            <p><b>Mã ghế: </b>{
              selected.map(ghe => {
                return ghes[ghe].maGhe + " ";
              })
            }</p>
            <p><b>Tổng tiền: </b>{tongtien} VND</p>
          </div>
          <button onClick={() => handleDatVe({...data, ghes: selected.map(ghe => ghes[ghe].maGhe) })}>Đặt vé</button>
        </div>
      </div>
  )
}
