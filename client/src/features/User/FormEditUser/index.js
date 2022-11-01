import React from "react";
import Popup from "reactjs-popup";

export default function FormEditUser({ user, handleEditUser }) {
  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);
    const [phone, setPhone] = React.useState(user.phone);
    const [address, setAddress] = React.useState(user.address);

    const data = {
        name,
        email,
        phone,
        address
    }

  return (
    <Popup trigger={<button>Thay đổi thông tin</button>} modal>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">
            {user.name} [{user._id}]
          </div>
          <div className="content">
            <form className="formaddphim">
              <table className="formaddphim__table">
                <tbody>
                  <tr>
                    <td>Tên</td>
                    <td>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="tenPhim"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="email"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Số điện thoại</td>
                    <td>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        name="phone"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Địa chỉ</td>
                    <td>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        name="address"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                        <button onClick={(e) =>{e.preventDefault(); handleEditUser(data)}} className="btn btn-primary">Xác nhận</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <button className="btn btn-danger" onClick={close}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
