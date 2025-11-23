import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import topImg from "../../assets/customer-top.png";
import { FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow} from 'swiper/modules';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("/data/reviews.json")
            .then(res => res.json())
        .then(data => setReviews(data))
},[])



    return (
      <Container>
        <div className="space-y-4 py-10">
          <div className="flex justify-center items-center">
            <img src={topImg} alt="" />
          </div>
          <h1 className="text-3xl font-bold text-center">
            What our customers are sayings
          </h1>
          <p className="mx-auto w-4/6 text-center">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            autoplay={{ delay: 500, disableOnInteraction: false }}
            loop={true}
            speed={1000}
            coverflowEffect={{
              rotate: 65,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper my-15"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg p-5 space-y-2.5 w-96">
                  <FaQuoteRight className="text-2xl" />
                  <p>{review.review.split(" ").slice(0, 30).join(" ")}</p>
                  <div className="flex gap-3 pt-3 border-t border-dashed">
                    <img
                      className="border-2 rounded-full w-12 h-12 border-teal-400"
                      src={review.user_photoURL}
                      alt=""
                    />
                    <div>
                      <h1>{review.userName}</h1>
                      <p>{review.user_email}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    );
};

export default Reviews;