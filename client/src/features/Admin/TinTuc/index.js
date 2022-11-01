import TinTucApi from 'api/tintucApi'
import React, { useEffect } from 'react'
import ViewTableTinTuc from './ViewTableTinTuc'

export default function TinTuc() {
    const [tintucs, setTinTucs] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    useEffect(() => {
        const fetchTinTucs = async () => {
            setIsLoading(true)
            const response = await TinTucApi.getAllTinTuc()
            const data = await response.data
            setTinTucs(data)
            setIsLoading(false)
        }

        fetchTinTucs()
    }, [])

    const handleDelete = async (id) => {
        try {
            await TinTucApi.deleteTinTuc(id)
            setTinTucs(tintucs.filter(tintuc => tintuc._id !== id))
            alert('Xóa thành công')
        }
        catch (error) {
            alert('Xóa thất bại')
            console.log(error)
        }
    }

    const handleEdit = async (id, tintuc) => {
      isLoading(true);
      const response = await TinTucApi.updateTinTuc(id, tintuc);
      if (response.success === true) {
        alert(response.msg);
        isLoading(false);
        window.location.reload();
      } else {
        alert(response.msg);
        isLoading(false);
      }
    }

    const handleCreate = async (tintuc) => {
        isLoading(true);
        const response = await TinTucApi.createTinTuc(tintuc);
        if (response.success === true) {
            alert(response.msg);
            isLoading(false);
            window.location.reload();
        } else {
            alert(response.msg);
            isLoading(false);
        }
    }


  return (
    <div>
        <ViewTableTinTuc handleCreate={handleCreate} handleEdit={handleEdit} isLoading={isLoading} tintucs={tintucs} handleDelete={handleDelete} />
    </div>
  )
}
