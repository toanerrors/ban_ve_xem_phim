import { unwrapResult } from '@reduxjs/toolkit';
import PhimApi from 'api/phimApi';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import TablePhim from '../components/TablePhim';
import { getPhim } from '../phimSlice';

export default function ViewListPhim() {
    const [phims, setPhims] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);  

    const dispatch = useDispatch();
    useEffect(() => {
        const getPhimLL = async () => {
            const currentAction = await dispatch(getPhim());
            const result = unwrapResult(currentAction);
            setPhims(result.data)
        };
        return getPhimLL();
    }, [dispatch])

    const handleDelete = async (id) => {
      setIsLoading(true);
      const response = await PhimApi.deletePhim(id);
      if (response.success === true) {
        alert(response.message);
        window.location.reload();
        setIsLoading(false);
      } else {
        alert(response.message);
        setIsLoading(false);
      }
    }

    const handleEdit = async (phim, idPhim) => {
      setIsLoading(true);
      const response = await PhimApi.updatePhim(phim, idPhim);
      if (response.success === true) {
        alert(response.message);
        setIsLoading(false);
        window.location.reload();
      } else {
        alert(response.message);
        setIsLoading(false);
      }
    }

    const handleReset = async (id) => {
      setIsLoading(true);
      const response = await PhimApi.resetPhim(id);
      if (response.success === true) {
        alert(response.message);
        window.location.reload();
        setIsLoading(false);
      } else {
        alert(response.message);
        setIsLoading(false);
      }
    }

  return (
    <div>
        <TablePhim handleReset={handleReset} isLoading={isLoading} handleEdit={handleEdit} handleDelete={handleDelete} phims={phims} />
    </div>
  )
}
