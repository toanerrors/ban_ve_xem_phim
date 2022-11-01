import React, { useEffect } from "react";
import CardShowing from "./CardShowing";
import "./index.scss";

export default function Showing({ datas = [] }) {
  let zindex = 0;
  let left = -130;
    const [xh, setXh] = React.useState(10);
    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth < 500){
                setXh(2);
            }else if(window.innerWidth < 768) {
                setXh(3);
            } else if(window.innerWidth < 1024) {
                setXh(4);
            } else if(window.innerWidth < 1280) {
                setXh(5);
            }
        });
    }, []);
    
  return (
    <div className="banner">
      <div className="slide-banner">
        {datas.slice(0, xh).map((phim, index) => {
          zindex++;
          left += 130;
          let config = {
            zindex: zindex,
            left: left,
          };
          return <CardShowing config={config} key={index} phim={phim} />;
        })}
      </div>
    </div>
  );
}
