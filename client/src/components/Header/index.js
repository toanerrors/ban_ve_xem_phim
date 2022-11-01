import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import images from "constants/images";
import "./index.scss";
import Login from "components/Auth/Login";
import Register from "components/Auth/Register";
import UserApi from "api/userApi";

export default function Header({ search , handleSearch }) {
  const [isOpen, setIsOpen] = React.useState(true);
  const [iconOpen, setIconOpen] = React.useState("fa fa-align-justify");
  const [isLoading, setIsLoading] = React.useState(false);
  const [navActive, setNavActive] = React.useState(
    localStorage.getItem("navActive") || 0
  );
  const user = JSON.parse(localStorage.getItem("user"));

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
    setIconOpen(isOpen ? "fa fa-align-justify" : "fa fa-times");
  };

  const handleResize = () => {
    if (window.innerWidth > 880) {
      setIsOpen(true);
      setIconOpen("fa fa-times");
    } else {
      setIsOpen(false);
      setIconOpen("fa fa-align-justify");
    }
  };
  window.addEventListener("resize", handleResize);

  useEffect(() => {
    if (window.innerWidth < 880) {
      setIsOpen(false);
      setIconOpen("fa fa-align-justify");
    }
  }, []);

  const handleLogin = async (data) => {
    setIsLoading(true);
    if (data.email === "" || data.password === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      setIsLoading(false);
      return;
    }

    try {
      const response = await UserApi.login(data);
      setIsLoading(false);
      alert(response.message);
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("token", response.token);

      window.location.reload();
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 422) {
        alert(error.response.data.message);
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại");
      }
      return;
    }
  };

  const handleRegister = (data) => {
    const { name, email, phone, address, password, repassword } = data;
    setIsLoading(true);
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      password === "" ||
      repassword === ""
    ) {
      alert("Vui lòng nhập đầy đủ thông tin");
      setIsLoading(false);
      return;
    }

    if (password !== repassword) {
      alert("Mật khẩu không khớp");
      setIsLoading(false);
      return;
    }

    UserApi.register({
      name,
      email,
      phone,
      address,
      password,
    })
      .then((response) => {
        setIsLoading(false);
        alert(response.message);
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.token);
        window.location.reload();
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error.response.data.message);
        return;
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    var navbar = document.querySelectorAll("#navbarlink > li > a");
    navbar[navActive].classList.add("active");
    localStorage.setItem("navActive", navActive);
    return () => {
      navbar[navActive].classList.remove("active");
    };
  }, [navActive]);

  return (
    <div className="main">
      <header className="header-main">
        <div className="logo">
          <img
            onClick={() => (window.location.href = "/")}
            id="logo-img"
            src={images.logo}
            alt=""
          />
          <div className="search">
            <input
              placeholder="Tìm kiếm trên ..."
              type="search"
              name="search"
              id="search"
              onChange={handleSearch}
              value={search}
            />
            <button id="search-start">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="navbar">
          <nav style={{ display: isOpen ? "block" : "none" }} id="navbar">
            <ul id="navbarlink">
              <li>
                <Link onClick={() => setNavActive(0)} to="/">
                  <i className="fa fa-home" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link onClick={() => setNavActive(1)} to="/tintuc">
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link onClick={() => setNavActive(2)} to="/thongbao">
                  <i className="fa fa-bullhorn" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link onClick={() => setNavActive(3)} to="/sukien">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="navbar-respon">
            <button onClick={handleOpenMenu}>
              <i className={iconOpen} aria-hidden="true"></i>
            </button>
          </div>
        </div>
        {user ? (
          <div className="profile-user">
            <div className="name">
              <p>{user.name}</p>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/user">Trang cá nhân</Link>
                </li>
                {user.role === "admin" ? (
                  <li>
                    <Link to="/admin">Quản lý</Link>
                  </li>
                ) : null}
                <li>
                  <Link onClick={handleLogout} to="/">
                    Đăng xuất
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="profile">
            <Login isLoading={isLoading} handleLogin={handleLogin} />
            <Register isLoading={isLoading} handleRegister={handleRegister} />
          </div>
        )}
      </header>
    </div>
  );
}
