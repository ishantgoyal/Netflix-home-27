import "./navbar.scss";
import pic from "../../img/R.jpeg";
import photo from "../../img/bg.webp";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={pic} alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          <FaSearch className="icon" />
          <img src={photo} alt="" />
          <div className="profile">
            <IoIosArrowDown className="icon" />
            <div className="options">
              <span>Setting</span>
              <span>LogOut</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
