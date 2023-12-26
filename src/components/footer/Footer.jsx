import "./Footer.scss";
import pic from "../../img/R.jpeg";
import React from "react";
function Footer() {
  return (
    <>
      <footer class="netflix-footer">
        <div class="container">
          <div class="footer-logo">
            <img src={pic} alt="Netflix Logo" />
          </div>
          <div class="footer-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">New & Popular</a>
              </li>
              <li>
                <a href="#">My List</a>
              </li>
            </ul>
          </div>
          <div class="footer-social">
            <a href="#" class="social-icon">
              <img src="/photo/img1.png" alt="Facebook" />
            </a>
            <a href="#" class="social-icon">
              <img src="/photo/img2.png" alt="Twitter" />
            </a>
            <a href="#" class="social-icon">
              <img src="/photo/img3.png" alt="Instagram" />
            </a>
          </div>
        </div>
        <div class="footer">
          <p>&copy; 2023 Your Website Name. All rights reserved.</p>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Help Center</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
