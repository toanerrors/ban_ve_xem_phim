import React from 'react'
import Popup from 'reactjs-popup'

export default function PopupGhe() {
  return (
    <Popup trigger={<button>DS Ghe</button>} modal>
        {
            close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header">Danh sách ghế</div>
                    <div className="content">
                        <table>
                            <thead className='table-header'>
                                <tr className='table-header-item'>
                                    <th width="100px">STT</th>
                                    <th>Tên ghế</th>
                                    <th>Trạng thái</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody className='table-body'>
                                <tr className='table-body-item'>
                                    <td>1</td>
                                    <td>A1</td>
                                    <td>Còn</td>
                                    <td className='chucnang'>
                                        <button>Xóa</button>
                                        <button>Sửa</button>
                                    </td>
                                </tr>
                                <tr className='table-body-item'>
                                    <td>2</td>
                                    <td>A2</td>
                                    <td>Còn</td>
                                    <td className='chucnang'>
                                        <button>Xóa</button>
                                        <button>Sửa</button>
                                    </td>
                                </tr>
                                <tr className='table-body-item'>
                                    <td>3</td>
                                    <td>A3</td>
                                    <td>Còn</td>
                                    <td className='chucnang'>
                                        <button>Xóa</button>
                                        <button>Sửa</button>
                                    </td>
                                </tr>
                                <tr className='table-body-item'>
                                    <td>4</td>
                                    <td>A4</td>
                                    <td>Còn</td>
                                    <td className='chucnang'>
                                        <button>Xóa</button>
                                        <button>Sửa</button>
                                    </td>
                                </tr>
                                <tr className='table-body-item'>
                                    <td>5</td>
                                    <td>A5</td>
                                    <td>Còn</td>
                                    <td className='chucnang'>
                                        <button>Xóa</button>
                                        <button>Sửa</button>
                                    </td>
                                </tr>
                                <tr className='table-body-item'>
                                    <td>6</td>
                                    <td>A6</td>
                                    <td>Còn</td>
                                    <td className='chucnang'>
                                        <button>Xóa</button>
                                        <button>Sửa</button>
                                    </td>
                                </tr>
                                <tr className='table-body-item'>
                                    <td>7</td>
                                    <td>A7</td>
                                    <td>Còn</td>
                                    <td className='chucnang'>
                                        <button>Xóa</button>
                                        <button>Sửa</button>
                                    </td>
                                </tr>
                                </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    </Popup>
  )
}
