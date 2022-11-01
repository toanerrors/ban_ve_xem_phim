import React from 'react'

export default function ViewTableTinTuc({ tintucs = [], handleDelete }) {
    let i = 0;
  return (
    <table>
      <thead className="table-header">
        <tr className="table-header-item">
          <th width="100px">STT</th>
          <th>Tiêu đề</th>
          <th>Hình Ảnh</th>
          <th>Nội dung</th>
        <th>Chức năng</th>  
        </tr>
      </thead>
      <tbody className="table-body">
        {tintucs.map((tintuc) => (
          <tr className="table-body-item" key={tintuc._id}>
            <td>{i++}</td>
            <td>{tintuc.tieuDe}</td>
            <td>
              <img className="table-body-item-img" src={tintuc.hinhAnh} alt="" />
            </td>
            <td>{tintuc.noiDung}</td>
            <td className="chucnang">
              <button
                className="table-body-item-button"
                onClick={() => handleDelete(tintuc._id)}
              >
                Xóa
              </button>
              <button className="table-body-item-button">Sửa</button>
              <button className="table-body-item-button">Thêm</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
