import "./List.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Listitem from "../listitem/Listitem";
import { useRef, useState } from "react";

export default function List({ featuredRow: { titleBar, moviesDetailes } }) {
  const [isMoved, setisMoved] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    setisMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && sliderNumber < 5) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{titleBar} </span>
      <div className="wrapper">
        <IoIosArrowBack
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {moviesDetailes.map((movie, index) => (
            <Listitem {...movie} key={index} />
          ))}
        </div>
        <IoIosArrowForward
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
