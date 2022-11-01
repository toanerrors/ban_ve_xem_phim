import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import "./index.scss";

export default function Login({ handleLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [data, setData] = React.useState({});

  useEffect(() => {
    setData({
      email,
      password,
    });
  }, [email, password]);

  return (
    <Popup trigger={<button>Đăng nhập</button>} modal>
      {(close) => (
        <div className="formlogin">
          <div className="header">
            <h2>Đăng nhập</h2>

            <button className="close" onClick={close}>
              &times;
            </button>
          </div>
          <div className="content">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(data);
                }}
                type="submit"
                className="btn btn-primary"
              >
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      )}
    </Popup>
  );
}
