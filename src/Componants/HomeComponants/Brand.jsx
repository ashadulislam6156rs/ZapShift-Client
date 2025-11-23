import React from "react";
import Container from "../Container/Container";
import img1 from "../../assets/brands/amazon.png";
import img2 from "../../assets/brands/amazon_vector.png";
import img3 from "../../assets/brands/casio.png";
import img4 from "../../assets/brands/moonstar.png";
import img5 from "../../assets/brands/randstad.png";
import img6 from "../../assets/brands/star.png";
import img7 from "../../assets/brands/start_people.png";

import ticketImg from "../../assets/live-tracking.png"
import deliveryImg from "../../assets/safe-delivery.png"
import locationImg from "../../assets/location-merchant.png";
import absoluteImg from "../../assets/be-a-merchant-bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// import "./styles.css";


const Brand = () => {
  const images = [img1, img3, img4, img5, img6, img2, img7];

  const fetureData = [
    {
      img: `${ticketImg}`,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      img: `${deliveryImg}`,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      img: `${deliveryImg}`,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];



  return (
    <Container>
      <div className="my-10 px-20">
        <h1 className="text-2xl font-bold text-center mb-4">
          We've helped thousands of sales teams
        </h1>
        <div className="flex gap-20 py-5 items-center justify-center">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            
            className="mySwiper"
            modules={[Autoplay]}
            speed={1000}
            allowTouchMove={false}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img className="w-20" src={img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* fetureData Section */}
        <div className="space-y-3 mt-10 pt-10 border-t border-dashed">
          {fetureData.map((data, index) => (
            <div
              key={index}
              className="flex p-5 items-center gap-4 bg-white rounded-lg"
            >
              <img className="w-25" src={data.img} alt="" />
              <div className="ml-5 pl-5 border-l border-dashed h-30 flex flex-col justify-center">
                <h1 className="text-xl font-semibold mb-2">{data.title}</h1>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Section */}
        <div className="pt-10 border-t border-dashed mt-10">
          <div className="flex justify-between items-center p-10 rounded-lg bg-[#02373d] text-white relative">
            <div
              className="absolute top-0 w-full -left-5"
              style={{
                backgroundImage: `url(${absoluteImg})`,
                height: "110px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="left-side pl-10 space-y-3 w-6/8">
              <h1 className="text-white text-3xl font-semibold">
                Merchant and Customer Satisfaction is Our First Priority
              </h1>
              <p className="w-6/8 text-xs text-gray-400">
                We offer the lowest delivery charge with the highest value along
                with 100% safety of your product. Pathao courier delivers your
                parcels in every corner of Bangladesh right on time.
              </p>
              <div className="flex gap-2">
                <button className="btn btn-accent">Become a Merchant</button>
                <button className="btn btn-outline">
                  Earn with ZapShift Courier
                </button>
              </div>
            </div>
            <div className="right-side">
              <img src={locationImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Brand;
