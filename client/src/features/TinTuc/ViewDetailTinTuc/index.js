import TinTucApi from 'api/tintucApi'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ViewDetailTinTuc() {
    const [tintuc, setTintuc] = React.useState([])

    const { id } = useParams()

    useEffect(() => {
        const fetchTintucList = async () => {
            try{
                const response = await TinTucApi.getTinTucById(id)
                setTintuc(response.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchTintucList()
    }, [id])
  return (
        <div className="modal">
          <h1>Thông tin:</h1>
          <div className="product">
            <img
              className="product__img"
              src={tintuc.hinhAnh}
              alt={tintuc.hinhAnh}
            />
            <div className="product__content">
              <h3>{tintuc.tieuDe}</h3>
                <p>{tintuc.noiDung}</p>
            </div>
          </div>
        </div>
  )
}
