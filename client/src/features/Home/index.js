import PhimApi from 'api/phimApi.js'
import TinTucApi from 'api/tintucApi.js'
import React from 'react'
import BannerSlide from './components/BannerSlide/index.js'
import PhimHot from './components/PhimHot/index.js'
import Product from './components/Product/index.js'
import './index.scss'

export default function Home({ search }) {
  const [phim, setPhim] = React.useState([])
  const [tintuc, setTintuc] = React.useState([])

  React.useEffect(() => {
    const fetchPhimList = async () => {
      try{
        const response = await PhimApi.getAllPhim()
        setPhim(response.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchPhimList()

    const fetchTintucList = async () => {
      try{
        const response = await TinTucApi.getAllTinTuc()
        setTintuc(response.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchTintucList()
  }, [])

  return (
    <div className='home'>
      {(tintuc.length > 0 && search === "" ) && <BannerSlide datas={tintuc} />}
      {(phim.length >= 3 && search === "") && <PhimHot datas={phim} />}
      {(phim.length > 0) && <Product search={search} datas={phim} />}
    </div>
  )
}
