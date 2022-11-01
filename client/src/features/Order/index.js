import PhimApi from "api/phimApi";
import React, { useEffect } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import TTPhim from "./TTPhim";
import RapApi from "api/rapApi";
import ListRap from "./ListRap";
import ListGhe from "./ListGhe";
import VeApi from "api/veApi";

export default function Order() {
  const [phim, setPhim] = React.useState({});
  const [ghes, setGhes] = React.useState([]);
  const [raps, setRaps] = React.useState([]);
  const [data, setData] = React.useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchPhim = async () => {
      try {
        const response = await PhimApi.getPhimById(id);
        setPhim(response.data.phim);
        setGhes(response.data.ghes);
        setData({ idphim: response.data.phim._id, tenphim: response.data.phim.tenPhim });
      } catch (err) {
        console.log(err);
      }
    };
    fetchPhim();

    const fetchRaps = async () => {
        try {
            const response = await RapApi.getAllRap();
            setRaps(response.data);
        } catch (err) {
            console.log(err);
        }
        };
        fetchRaps();
  }, [id]);

  const handleDatVe = async (dulieu) => {
    const { idphim, ghes, rap, lichChieu, tenRap } = dulieu;
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user) {
      alert("Bạn chưa đăng nhập");
      return;
    }
    const data = {
      idUser: user._id,
      idPhim: idphim,
      tenPhim: phim.tenPhim,
      dsghe: ghes,
      idRap: rap,
      tenRap: tenRap,
      lichChieu,
    };
    if(data.dsghe.length === 0) {
      alert("Vui lòng chọn ghế");
      return;
    }
    if(!data.lichChieu) {
      alert("Vui lòng chọn ngày");
      return;
    }
    if(!data.idRap) {
      alert("Vui lòng chọn rạp");
      return;
    }
    if(!data.idPhim) {
      alert("Vui lòng chọn phim");
      return;
    }

    try {
      const response = await VeApi.datVe(data);
      alert(response.message);
      window.location.reload();
    } catch (error) {
      alert(error.response.data.message);
      return;
    }
  };

  return (
    <div>
      <TTPhim phim={phim} data={data} setData={setData} />
      <ListRap raps={raps} data={data} setData={setData} />
      {
        data.lichChieu !== undefined && <ListGhe ghes={ghes} handleDatVe={handleDatVe} data={data} setData={setData} />
      }
    </div>
  );
}
