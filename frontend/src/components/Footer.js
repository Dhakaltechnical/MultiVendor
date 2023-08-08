import React from 'react'
import {Link} from 'react-router-dom';
import { BsLinkedin,BsGithub,BsYoutube,BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
   
    <footer className="py-4">
      <div className="container-xl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <div>
              <address className="text-white fs-6">
                Hno: 532 Near PaheloPul,
                <br />Nayabasti, Kathmandu <br />
                PinCode :44600
              </address>
                <a href="tel:+977 9765970229" 
                className="mt-3 d-block mb-1 text-white">
                +977 9765970229
                </a>
                <a href="mailto:rupakdhakal98@gmail.com" 
                className="mt-2 d-block mb-0  text-white">
                rupakdhakal98@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className=" fs-4 " />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className=" fs-4 "/>
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className=" fs-4 "/>
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className=" fs-4 "/>
                  </a>
                </div>

            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Information</h4>
            <div className="footer-link d-flex flex-column">
              <Link to="/privacy-policy"  className="text-white py-2 mb-1 ">Privacy Policy</Link>
              <Link to="/refund-policy" className="text-white py-2 mb-1 ">Refund Policy</Link>
              <Link to="/shipping-policy" className="text-white py-2 mb-1 ">ShippingPolicy</Link>
              <Link to="/term-condition" className="text-white py-2 mb-1 ">Terms & Conditions </Link>
              

            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Account</h4>
            <div className="footer-link d-flex flex-column">
              <Link className="text-white py-2 mb-1 ">About Us</Link>
              <Link className="text-white py-2 mb-1 ">Faq</Link>
              <Link to="/contact"className="text-white py-2 mb-1 ">Contact </Link>
              

            </div>
          </div>
          <div className="col-2">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="footer-link d-flex flex-column">
              <Link className="text-white py-2 mb-1 ">Beauty</Link>
              <Link className="text-white py-2 mb-1 ">Women's Fashion</Link>
              <Link className="text-white py-2 mb-1 ">Men's Fashion</Link>
              <Link className="text-white py-2 mb-1 ">Watch</Link>
              <Link className="text-white py-2 mb-1 ">Headphones</Link>

            </div>
            </div> 
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy;{ new Date().getFullYear()}; Powered By EShop
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer