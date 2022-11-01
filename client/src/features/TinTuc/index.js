import TinTucApi from 'api/tintucApi'
import React, { useEffect } from 'react'
import ViewTinTuc from './ViewTinTuc'

export default function TinTuc() {
  const [tintuc, setTintuc] = React.useState([])
  useEffect(() => {
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
    <div>
      <ViewTinTuc datas={tintuc} />
    </div>
  )
}
