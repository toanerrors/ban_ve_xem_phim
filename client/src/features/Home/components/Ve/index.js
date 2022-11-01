import React, {  } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function Ve({ phim }) {
  return (
    <button>
      <Link className='datve' to={"/order/" + phim._id}>Đặt vé</Link>
    </button>
  )
}
