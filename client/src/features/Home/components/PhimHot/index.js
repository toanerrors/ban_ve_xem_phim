import React, { useEffect } from "react";
import "./index.scss";
import Slide from "./Slide";

export default function PhimHot({ datas }) {
  const [slideCouter, setSlideCouter] = React.useState(2);
  const [slide, setSlide] = React.useState([]);
  
  useEffect(() => {
    if (datas.length > 0) {
      let slide = document.getElementsByClassName("phimhot__slide");
      setSlide(slide);

      for (let i = 0; i < slide.length; i++) {
        slide[i].style = "transform: translateX(" + -100 * slideCouter + "%)";
        slide[i].style.transition = "transform 0.5s ease-in-out";
        slide[i].style.width = "50%";
        slide[i].style.transitionDelay = "0.1s";

        let img = slide[i].getElementsByClassName("phimhot__image")[0];
        img.style.transform = "scale(0.8)";
        img.style.transition = "all 0.5s";
        img.style.opacity = "0.5";

        let titleWrap = slide[i].getElementsByClassName("phimhot__titleWrap")[0];
        titleWrap.style.opacity = "0";
        titleWrap.style.display = "none";
      }

      if(slideCouter === 0) {
        slide[slide.length-1].style.transform = "translateX(" + -100 * (slide.length+1) + "%)";
        slide[slide.length-2].style.transform = "translateX(" + -100 * (slide.length+1) + "%)";
        slide[0].style.transitionDelay = "0s";
      }
      if(slideCouter === 1) {
        slide[slide.length-2].style.transform = "translateX(" + -100 * (slide.length+1) + "%)";
        slide[0].style.transitionDelay = "0s";
      }

      if(slideCouter === slide.length-1) {
        slide[0].style.transform = "translateX(" + 100 * 2 + "%)";
        slide[1].style.transform = "translateX(" + 100 * 2 + "%)";
        slide[slide.length-1].style.transitionDelay = "0s";
      }
      if(slideCouter === slide.length-2) {
        slide[0].style.transform = "translateX(" + 100 * 3 + "%)";
        slide[slide.length-1].style.transitionDelay = "0s";
      }

      let slideActive = slide[slideCouter];
      slideActive.style.width = "100%";
      slideActive.style.transform = `translateX(${-50 * slideCouter}%)`;
      slideActive.style.transition = "transform 0.5s ease-in-out";
      slideActive.style.transitionDelay = "0s";

      let img = slideActive.getElementsByClassName("phimhot__image")[0];
      img.style.transform = "scale(1)";
      img.style.transition = "transform 0.5s ease-in-out";
      img.style.opacity = "1";

      let titleWrap = slideActive.getElementsByClassName("phimhot__titleWrap")[0];
      titleWrap.style.opacity = "1";
      titleWrap.style.display = "block";
    }
  }, [slideCouter, datas]);

  const slideNext = () => {
    if (slideCouter < slide.length - 1) {
      setSlideCouter(slideCouter + 1);
    } else {
      setSlideCouter(0);
    }
  };

  const slidePrev = () => {
    if (slideCouter > 0) {
      setSlideCouter(slideCouter - 1);
    }
    if (slideCouter === 0) {
      setSlideCouter(slide.length - 1);
    }
  };

  return (
    <div className="phimhot">
      <ul className="phimhot__container">
        {datas.map((data, index) => (
          <Slide data={data} key={index} />
        ))}
      </ul>
      {datas.length > 1 && (
        <div className="phimhot__control">
        <div onClick={slideNext} className="phimhot__next">
        <i className="fa fa-angle-right"></i>
        </div>
        <div onClick={slidePrev} className="phimhot__prev">
          <i className="fa fa-angle-left"></i>
        </div>
      </div>
      )}
    </div>
  );
}
