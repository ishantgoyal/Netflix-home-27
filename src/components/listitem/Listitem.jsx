import "./Listitem.scss";
import { FaPlay } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import { BiLike, BiDislike } from "react-icons/bi";
import { useState } from "react";

export default function Listitem({
  index,
  id,
  images,
  title,
  information,
  agee,
  sal,
  genre,
  describ,
  casting,
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: isHover && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={images}
        alt="image is not upload pls retry and upload this image "
      />
      {isHover && (
        <>
          <div className="itemInfo">
            <span>{title}</span>
            <div className="icons">
              <FaPlay className="icon" />
              <IoAddOutline className="icon" />
              <BiLike className="icon" />
              <BiDislike className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{information}</span>
              <span className="limit">{agee}</span>
              <span>{sal}</span>
              <span className="Genr">{genre}</span>
            </div>
            <div className="desc">{describ}</div>
            <div className="genre">{casting}</div>
          </div>
        </>
      )}
    </div>
  );
}
