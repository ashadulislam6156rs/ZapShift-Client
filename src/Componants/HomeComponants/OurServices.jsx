import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import img from "../../assets/service.png";


const OurServices = () => {
     const [services, setServices] = useState([]);

     useEffect(() => {
       fetch("/services.json")
         .then((res) => res.json())
         .then((data) => setServices(data));
     }, []);
    
    
    return (
      <Container>
        <div className="bg-[#03373D] rounded-lg p-10 my-10">
          <h1 className="text-3xl  my-2 text-white font-black text-center">
            Our Services
          </h1>
          <p className="text-sm  my-2 text-white text-center mx-auto md:w-3/6">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-10">
            {services?.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center">
                <div className="flex items-center justify-center">
                  <img src={img} alt="" />
                </div>
                <h1 className="text-xl font-semibold">{service.title}</h1>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    );
};

export default OurServices;