import "./features.scss";
import photoo from "../../img/bg.webp";
import info from "../../img/ishant.webp";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Features({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="catagory">
          <span>{type === "movie" ? "movies" : "series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy<">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historcial">Historcial</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller"> Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentry">Documentry</option>
          </select>
        </div>
      )}
      <img width="100%" src={photoo} alt="" />
      <div className="info">
        <img src={info} alt="" />
        <span className="desc">
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </span>
        <div className="buttons">
          <button className="play">
            <FaPlay />
            <span>Play</span>
          </button>
          <button className="More-Info">
            <IoIosInformationCircleOutline />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
