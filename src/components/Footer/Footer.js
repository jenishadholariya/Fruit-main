import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';


function Footer(props) {
  const value = useContext(themeContext);
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <div>
      <div>
        <div className={`footer-area ${value.theme}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-box about-widget">
                  <h2 className="widget-title">About us</h2>
                  <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-box get-in-touch">
                  <h2 className="widget-title">Get in Touch</h2>
                  <ul>
                    <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                    <li>support@fruitkha.com</li>
                    <li>+00 111 222 3333</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-box pages">
                  <h2 className="widget-title">Pages</h2>
                  <ul>
                    <li><NavLink to={'/index'} onClick={() => handleClick()}>Home</NavLink></li>
                    <li><NavLink to={'/about'} onClick={() => handleClick()}>About</NavLink></li>
                    <li><NavLink to={'/shop'} onClick={() => handleClick()}>Shop</NavLink></li>
                    <li><NavLink to={'/news'} onClick={() => handleClick()}>News</NavLink></li>
                    <li><NavLink to={'/contact'} onClick={() => handleClick()}>Contact</NavLink></li>
                    {/* <li><NavLink to={'/fruit'}>fruit</NavLink></li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-box subscribe">
                  <h2 className="widget-title">Subscribe</h2>
                  <p>Subscribe to our mailing list to get the latest updates.</p>
                  <form action="index.html">
                    <input type="email" placeholder="Email" />
                    <NavLink to={'/index'}><button type="submit"><i className="fas fa-paper-plane" /> </button></NavLink>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end footer */}
        {/* copyright */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <p>Copyrights © 2019 - <a href="https://imransdesign.com/">Imran Hossain</a>,  All Rights Reserved.</p>
              </div>
              <div className="col-lg-6 text-right col-md-12">
                <div className="social-icons">
                  <ul>
                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-linkedin" /></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-dribbble" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button href='#' className='btn btn-lg back-to-top' onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}><i className="fas fa-angle-up" /></button>
        </div>
      </div>

    </div>
  );
}

export default Footer;