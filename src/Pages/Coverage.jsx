import React, { useRef } from "react";
import Container from "../Componants/Container/Container";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const Coverage = () => {
    const position = [23.685, 90.3563];
    const data = useLoaderData();
    const userRef = useRef();
    console.log(data);
    
    const handleSearch = (e) =>{
        e.preventDefault();
        const userValue = e.target.search.value;
        const findValue = data.find(c => c.district.toLowerCase().includes(userValue.toLowerCase()));

        if (!userValue.length) {
            toast.error("Please Search Your Spacific Location!")
        }
          if (findValue && userValue.length) {
            const findPosition = [findValue.latitude, findValue.longitude];
            userRef.current.flyTo(findPosition, 14);
        }
          else if (!findValue) {
            toast.error("Location Not Found! Try to another location.");
          }
        
    }


  return (
    <Container>
      <div className="bg-white py-7 px-14 rounded-lg m-5">
        <div className="pb-7">
          <h1 className="text-4xl font-bold my-7">
            We are available in 64 districts
          </h1>
          {/* Search */}
          <form onSubmit={handleSearch}>
            <label className="input w-96 pr-0 outline-0 text-sm rounded-full bg-[#CBD5E150]">
              <svg
                className="h-[2em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                name="search"
                className="grow"
                placeholder="Search"
              />

              <button className="bg-[#CAEB66] h-full rounded-full px-5 btn">
                Search
              </button>
            </label>
          </form>
        </div>
        {/* Map div */}
        <div className="pt-7 border-t border-t-gray-300">
          <h1 className="text-xl font-semibold">
            We deliver almost all over Bangladesh
          </h1>
          {/* Map Container */}
          <div className="w-full mt-5 mb-10 h-[710px] border rounded-lg p-1">
            <MapContainer
              className="h-[700px] rounded-lg"
              center={position}
              zoom={7}
              scrollWheelZoom={false}
              ref={userRef}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {data.map((center, index) => (
                <Marker
                  key={index}
                  position={[center.latitude, center.longitude]}
                >
                  <Popup>
                    <strong>{center.district}</strong> <br />{" "}
                    <span className="font-semibold">Services Area: </span>
                    {center.covered_area.join(", ")}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Coverage;
