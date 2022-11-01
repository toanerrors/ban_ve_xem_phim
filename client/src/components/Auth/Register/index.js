import React, { useEffect } from 'react'
import Popup from 'reactjs-popup'
import './index.scss'

export default function Register({ handleRegister }) {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [repassword, setRepassWord] = React.useState('')
    const [data, setData] = React.useState({})

    useEffect(() => {
        setData({
            name,
            email,
            phone,
            address,
            password,
            repassword,
        });
    }, [name, email, phone, address, password, repassword])

  return (
    <Popup trigger={<button>Đăng ký</button>} modal>
        {close => (
            <div className="formlogin">
                <div className="header">
                    <h2>Đăng ký</h2>

                    <button className="close" onClick={close}>
                        &times;
                    </button>
                </div>
                <div className="content">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Tên:</label>
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" id="name" placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Số điện thoại:</label>
                            <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" className="form-control" id="phone" placeholder="Enter phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Đỉa chỉ:</label>
                            <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" className="form-control" id="address" placeholder="Enter address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu:</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="repassword">Nhập lại mật khẩu:</label>
                            <input onChange={(e) => setRepassWord(e.target.value)} value={repassword} type="password" className="form-control" id="repassword" placeholder="Re password" />
                        </div>
                        <button onClick={(e) => {e.preventDefault(); handleRegister(data)}} type="submit" className="btn btn-primary">Đăng ký</button>
                    </form>
                </div>
            </div>
        )}
    </Popup>
  )
}
