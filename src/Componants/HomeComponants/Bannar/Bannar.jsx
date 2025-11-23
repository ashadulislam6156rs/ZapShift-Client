import React from 'react';
import img1 from "../../../assets/banner/banner1.png"
import img2 from "../../../assets/banner/banner2.png";
import img3 from "../../../assets/banner/banner3.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowOutward } from 'react-icons/md';
import Container from '../../Container/Container';

const Bannar = () => {
    const images = [img1, img2, img3];

    return (
      <Container className={`mt-10`}>
        <Carousel autoPlay={true} infiniteLoop={true} stopOnHover={true}>
          {images.map((img,index) => (
            <div key={index} className="relative">
              <img className="relative" src={img} />
              <div className="navbar-end gap-2 absolute bottom-5 -left-2 lg:bottom-17 lg:-left-55 hidden md:flex">
                <button className="btn btn-accent">Track Your Parcel</button>
                <button className="btn btn-circle btn-neutral">
                  <MdArrowOutward className="text-2xl font-bold" />
                </button>
                <button className="btn btn-outline">Be A Rider</button>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    );
};

export default Bannar;