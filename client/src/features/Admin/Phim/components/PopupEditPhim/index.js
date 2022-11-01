import React from "react";
import Popup from "reactjs-popup";
import FormAddPhim from "../FormAddPhim";
import "./index.scss";

export default function PopupEditPhim({ handleEdit, phim, isLoading }) {
  return (
    <Popup trigger={<button>Edit</button>} modal>
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">{phim.tenPhim} [{phim._id}]</div>
          <div className="content">
            <FormAddPhim isLoading={isLoading} phim={phim} handleEdit={handleEdit} />
            <button className="btn btn-danger" onClick={close}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
