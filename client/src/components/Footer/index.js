import Chat from "features/Chat";
import React from "react";
import "./index.scss";

export default function Footer() {
  const [trangthai, setTrangthai] = React.useState(false);
  const isUser = JSON.parse(localStorage.getItem("user"));

  const handleShowChat = () => {
    if(!isUser) {
      alert("Bạn phải đăng nhập để sử dụng chức năng này!");
      return;
    }
    setTrangthai(!trangthai);
  };
  return (
    <footer className="footer">
      <button className={`${trangthai ? 'activeChat' : 'noactiveChat'} activechat`} onClick={handleShowChat}>{trangthai ? 'x' : 'Chat'}</button>
      {trangthai ? <Chat setTrangthai={setTrangthai} /> : null}
      <h1>18055251-Nguyễn Văn Toàn</h1>
    </footer>
  );
}
