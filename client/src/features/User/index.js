import UserApi from 'api/userApi';
import VeApi from 'api/veApi';
import React from 'react'
import FormEditUser from './FormEditUser';
import './index.scss'

export default function User() {
    const user = JSON.parse(localStorage.getItem('user'));
    const [hoadon, setHoadon] = React.useState([]);

    if(!user) {
        alert('Vui lòng đăng nhập');
        window.location.href = '/login';
    }

    React.useEffect(() => {
        const fetchHoadonList = async () => {
            try{
                const response = await VeApi.getVeByUser(user._id);
                setHoadon(response.data.reverse());
            } catch(err) {
                console.log(err)
            }
        }
        fetchHoadonList()
    }, [user._id])

    const formatDate = (date) => {
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        return [year, month, day].join('-');
    }

    const handleEditUser = (data) => {
        const { name, email, phone, address } = data;
        try{
            UserApi.update(name, email, phone, address, user._id);
            alert('Cập nhật thành công');
            alert('Vui lòng đăng nhập lại');
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            window.location.href = '/';
        } catch(err) {
            console.log(err)
        }
    }

  return (
    <div className='user'>
        <div className='user__thongtin'>
            <h1>Thông tin của bạn: </h1>
            <p><b>Tên: </b>{user.name}</p>
            <p><b>Email: </b>{user.email}</p>
            <p><b>Số điện thoại: </b>{user.phone}</p>
            <p><b>Địa chỉ: </b>{user.address}</p>
            <FormEditUser handleEditUser={handleEditUser} user={user} />
        </div>
        <div className='user__lichsu'>
            <h1>Lịch sử mua hàng: </h1>
            {
                hoadon.map((hoadon, index) => {
                    return (
                        <div className='user__lichsu-item' key={index}>
                            <h2>{hoadon.tenPhim || hoadon.idPhim}</h2>
                            <p><b>Rạp: </b>{hoadon.tenRap || hoadon.idRap}</p>
                            <p><b>Lịch chiếu: </b>{hoadon.lichChieu}</p>
                            <p><b>Ghế đã đặt: </b>{hoadon.dsghe.join('-')}</p>
                            <p><b>Tổng tiền thanh toán: </b>{hoadon.tongtien}</p>
                            <p><b>Ngày đặt: </b>{formatDate(hoadon.created_at)}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
