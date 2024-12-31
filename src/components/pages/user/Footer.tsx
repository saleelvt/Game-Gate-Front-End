import React, { memo } from 'react';
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";



const Footer: React.FC = memo(() => {
  return (
    <footer className='w-full lg:h-[260px] h-[500px] footer text-white md:px-[80px] px-[20px] pt-[20px] lg:pt-[0px] mt-[200px]'>
      <div className='flex justify-between items-center footer-section flex-col lg:flex-row'>
        <h1 className='text-[20px] footer-logo-head font-semibold py-[20px] lg:py-[0px]'>LOGO</h1>
        <div className='hidden lg:flex justify-center lg:gap-[20px] lg:text-[20px]'>
          <FaYoutube />
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
        <div className='flex flex-col justify-center text-center gap-[20px] text-[18px] lg:hidden py-[20px]'>
          <p>About Us</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Help Center</p>
        </div>
      </div>
      <div className='flex lg:justify-between justify-center items-center flex-col lg:flex-row lg:gap-[0px] gap-[28px] py-[20px] lg:py-[0px]'>
        <p>CompanyName @ 2024. All rights reserved.</p>
        <div className='hidden lg:flex justify-center lg:gap-[20px] lg:text-[18px]'>
          <p>About Us</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Help Center</p>
        </div>
        <div className='flex justify-center gap-[20px] text-[20px] lg:hidden'>
          <FaYoutube />
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
});

export default Footer;
