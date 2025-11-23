import React from 'react';
import Container from '../Container/Container';
import logo from "../../assets/white-logo.png"
import { RiTwitterXFill } from 'react-icons/ri';
import { IoLogoYoutube } from 'react-icons/io';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
      <Container>
        <footer className="footer footer-horizontal footer-center text-white rounded py-4 md:py-7">
          <nav>
            <div>
              <img className="w-20 md:w-25" src={logo} alt="" />
            </div>
            <p className="text-center md:w-4/6">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>
          </nav>
          <nav className="flex items-center justify-center gap-4 w-full py-7 border-t border-b border-dashed border-[#03464D]">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex md:flex-row flex-col justify-between items-center gap-4 w-full">
            <h3>
              Copyright © {new Date().getFullYear()} - All right reserved
              ZapShift
            </h3>

            <nav className="flex gap-3 items-center text-base">
              <a href="https://x.com/">
                <RiTwitterXFill />
              </a>
              <a href="https://www.youtube.com/@codeandspeech">
                <IoLogoYoutube />
              </a>
              <a href="https://www.facebook.com/share/1DE3Xd5V4C/">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/ashadulislam6156rs/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/ashadulislam6156rs">
                <FaGithub />
              </a>
            </nav>
          </nav>
        </footer>
      </Container>
    );
};

export default Footer;