import React from "react";
import icon from "../../assets/bookingIcon.png";

const HowItWork = () => {
  const worksData = [
    {
      title: "Booking Pick & Drop",
      details:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Cash On Delivery",
      details:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Delivery Hub",
      details:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Booking SME & Corporate",
      details:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-28">
      <h1 className="text-2xl font-bold my-5">How it Works</h1>
      <div className="flex flex-col md:flex-row gap-5 items-center">
        {worksData.map((work,index) => (
          <div key={index} className="bg-white p-3 rounded-lg shadow w-full space-y-2">
            <img src={icon} alt="" />
            <h1 className="text-base font-semibold">{work.title}</h1>
            <p className="text-gray-500">{work.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
