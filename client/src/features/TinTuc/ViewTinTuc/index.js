import React from 'react'
import './index.scss'

export default function ViewTinTuc( { datas = [] }) {
    const handleClick = (id) => {
        window.location.href = `/tintuc/${id}`
    }
  return (
    <div className='tintuc'>
        {datas.map((data, index) => {
            return (
                <div onClick={() => handleClick(data._id)} className='tintuc__item' key={index}>
                    <div className='tintuc__item-content'>
                        <h1>{data.tieuDe}</h1>
                        <p>{data.noiDung}</p>
                    </div>
                    <div className='tintuc__item-img'>
                        <img src={data.hinhAnh} alt='hinh anh' />
                    </div>
                </div>
            )
        })}
    </div>
  )
}
