import React, { useEffect } from "react";
import "./index.scss";
import LSide from "./LSide";
import RSide from "./RSide";
import color from "constants/Color";

export default function BannerSlide({ datas=[] }) {
  useEffect(() => {
    var Lslide = document.querySelectorAll(".Lslide"),
      Rslide = document.querySelectorAll(".Rslide"),
      control = document.querySelectorAll(".oncontrol"),
      slideHeight = document.querySelector(".wrapper").clientHeight,
      index = 0;

    function init() {
      slideHeight = document.querySelector(".wrapper").clientHeight;
      for (var i = 0; i < Lslide.length; i++) {
        Lslide[i].style.backgroundColor = color[i];
        Lslide[i].style.top = -slideHeight * i + "px";
        Rslide[i].style.top = slideHeight * i + "px";
      }
    }
    init();

    window.addEventListener("resize", function () {
      init();
    });

    function moveToTop() {
      index++;
      for (var el = 0; el < Lslide.length; el++) {
        Lslide[el].style.top =
          parseInt(Lslide[el].style.top) + slideHeight + "px";
        Rslide[el].style.top =
          parseInt(Rslide[el].style.top) - slideHeight + "px";
      }

      if (index > Lslide.length - 1) {
        index = 0;
        for (el = 0; el < Lslide.length; el++) {
          Lslide[el].style.top = -slideHeight * el + "px";
          Rslide[el].style.top = slideHeight * el + "px";
        }
      }
    }

    function moveToBottom() {
      index--;
      for (var el = 0; el < Lslide.length; el++) {
        Lslide[el].style.top =
          parseInt(Lslide[el].style.top) - slideHeight + "px";
        Rslide[el].style.top =
          parseInt(Rslide[el].style.top) + slideHeight + "px";
      }
      if (index < 0) {
        index = Rslide.length - 1;
        for (el = 0; el < Lslide.length; el++) {
          Lslide[el].style.top =
            parseInt(Lslide[el].style.top) + slideHeight * Lslide.length + "px";
          Rslide[el].style.top =
            parseInt(Rslide[el].style.top) - slideHeight * Rslide.length + "px";
        }
      }
    }

    function transition() {
      for (var t = 0; t < Lslide.length; t++) {
        Lslide[t].style.transition = "all 0.8s";
        Rslide[t].style.transition = "all 0.8s";
      }
    }

    for (var t = 0; t < control.length; t++) {
      control[t].addEventListener("click", function () {
        if (this.classList.contains("control-top")) {
          moveToTop();
        }
        if (this.classList.contains("control-bottom")) {
          moveToBottom();
        }

        transition();
      });
    }

    setInterval(function () {
      moveToTop();
      transition();
    },5000);

  });

  return (
    <div className="wrapper">
      <div className="container">
        <div className="slideshow">
          <div className="slideshow-left">
            {datas.map((phim, index) => {
              return <LSide data={phim} key={index} />;
            })}
          </div>
          <div className="slideshow-right">
            {datas.map((phim, index) => {
              return <RSide data={phim} key={index} />;
            })}
          </div>
          <div className="control">
            <div className="oncontrol control-top">
              <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
            <div className="oncontrol control-bottom">
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
