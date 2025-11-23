import React from "react";
import Container from "../../Componants/Container/Container";
import {  useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
      handleSubmit,
    control,
    formState: { errors },
    } = useForm();
    
    const data = useLoaderData();
    const regionDuplicate = data.map((d) => d.region);
    const regions = [...new Set(regionDuplicate)];
    const senderDistrict = useWatch({ control, name: "senderRegion" });
    const receiverDistrict = useWatch({ control, name: "receiverRegion" });

    const handleDistricts = (region) => {
        const regionsData = data.filter((r) => r.region === region);
        const district = regionsData.map((d) => d.district);
        return district;
    }
    

  const handleSendParcel = (data) => {
      
      console.log(data);
      let cost = 0;
      const isDocument = data.documentType === "Document";
      const isSameDistrict = data.Senderdistrict === data.receiverDistrict;
      if (isDocument) {
          cost = isSameDistrict ? 60 : 80;
      }
      else {
          
            //ParcelWeight
          if (data.ParcelWeight <= 3) {
              cost = isSameDistrict ? 110 : 150;
          } else {
              const extraWeight = data.ParcelWeight - 3;
              const extraCharge = extraWeight * 40;
              cost = isSameDistrict ? 110 + extraCharge : 150 + extraCharge + 40;
          }
      }
      
     console.log(cost);
     
      
      
  };

  return (
    <div>
      <Container>
        <div className="bg-white rounded-2xl py-10 px-5 my-5">
          <h1 className="text-3xl font-bold py-5">Send Parcel</h1>
          <form onSubmit={handleSubmit(handleSendParcel)} className="">
            <div className="border-t border-t-gray-300 py-5 pb-7">
              <strong className="">Enter your parcel details</strong>
              <div className="flex my-3 gap-15 items-center">
                <div className="flex gap-3 items-center">
                  <input
                    type="radio"
                    name="radio-12"
                    {...register("documentType")}
                    value={"Document"}
                    defaultChecked
                    className="radio bg-green-100 checked:bg-green-600 border-green-600 checked:green-200 checked:text-white checked:border-green-600"
                  />
                  Document
                </div>

                <div className="flex gap-3 items-center">
                  <input
                    type="radio"
                    name="radio-12"
                    {...register("documentType")}
                    value={"Not-Document"}
                    className="radio bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600"
                  />
                  Not-Document
                </div>
              </div>
              <fieldset className="flex gap-5 items-center">
                <div className="flex flex-col w-full">
                  <label className="label text-black mb-1 font-normal text-sm">
                    Parcel Name
                  </label>
                  <input
                    type="text"
                    className="input outline-0 w-full"
                    placeholder="Enter parcel Name"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="label text-black mb-1 font-normal text-sm">
                    Parcel Weight (KG)
                  </label>
                  <input
                                      type="number"
                                      {...register("ParcelWeight")}
                    className="input outline-0 w-full"
                    placeholder="Enter parcel weight (KG)"
                  />
                </div>
              </fieldset>
            </div>
            {/* Secound */}
            <div className="py-5 border-t border-t-gray-300 flex gap-10">
              <div className="flex-1">
                <strong>Sender Details</strong>
                <fieldset className="flex gap-5 items-center mt-4">
                  <div className="flex flex-col w-full">
                    <label className="label text-black mb-1 font-normal text-sm">
                      Sender Name
                    </label>
                    <input
                      type="text"
                      className="input outline-0 w-full"
                      placeholder="Enter Sender Name"
                    />
                  </div>
                </fieldset>
                <fieldset className="flex gap-5 items-center mt-3">
                  <div className="flex flex-col w-full">
                    <label className="label text-black mb-1 font-normal text-sm">
                      Sender Contact No
                    </label>
                    <input
                      type="text"
                      className="input outline-0 w-full"
                      placeholder="Enter Sender Contact No"
                    />
                  </div>
                </fieldset>
                <fieldset className="flex gap-5 items-center mt-3">
                  <div className="flex flex-col w-full">
                    <label className="label text-black mb-1 font-normal text-sm">
                      Your Region
                    </label>
                    <select
                      defaultValue="Select your region"
                      {...register("senderRegion")}
                      className="select appearance-none w-full"
                    >
                      <option disabled={true}>Select your region</option>

                      {regions.map((region, i) => (
                        <option key={i}>{region}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="label text-black mb-1 font-normal text-sm">
                      Sender Districts
                    </label>
                    <select
                      defaultValue="Select Sender Districts"
                      {...register("Senderdistrict")}
                      className="select appearance-none"
                    >
                      <option disabled={true}>Select Sender Districts</option>
                      {handleDistricts(senderDistrict).map((district, i) => (
                        <option key={i}>{district}</option>
                      ))}
                    </select>
                  </div>
                </fieldset>
                <div className="flex flex-col w-full mt-3">
                  <label className="label text-black mb-1 font-normal text-sm">
                    Sender Address
                  </label>
                  <input
                    type="text"
                    className="input outline-0 w-full"
                    placeholder="Enter Address"
                  />
                </div>

                <div className="flex flex-col w-full mt-3">
                  <label className="label text-black mb-1 font-normal text-sm">
                    Pickup Instruction
                  </label>
                  <textarea
                    className="textarea w-full"
                    placeholder="Pickup Instruction"
                  ></textarea>
                </div>
              </div>
              <div className="flex-1">
                <strong>Receiver Details</strong>
                <fieldset className="flex gap-5 items-center mt-4">
                  <div className="flex flex-col w-full">
                    <label className="label text-black mb-1 font-normal text-sm">
                      Receiver Name
                    </label>
                    <input
                      type="text"
                      className="input outline-0 w-full"
                      placeholder="Enter Receiver Name"
                    />
                  </div>
                </fieldset>
                <fieldset className="flex gap-5 items-center mt-3">
                  <div className="flex flex-col w-full">
                    <label className="label text-black mb-1 font-normal text-sm">
                      Receiver Contact No
                    </label>
                    <input
                      type="text"
                      className="input outline-0 w-full"
                      placeholder="Enter Receiver Contact No"
                    />
                  </div>
                </fieldset>
                <fieldset className="flex gap-5 items-center mt-3">
                  <div className="flex flex-col w-full">
                    <label className="label text-black mb-1 font-normal text-sm">
                      Receiver Region
                    </label>
                    <select
                      defaultValue="Select Receiver region"
                      {...register("receiverRegion")}
                      className="select appearance-none w-full"
                    >
                      <option disabled={true}>Select Receiver region</option>

                      {regions.map((region, i) => (
                        <option key={i}>{region}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="label text-black mb-1 font-normal text-sm">
                      Receiver Districts
                    </label>
                    <select
                      defaultValue="Select Receiver Districts"
                      {...register("receiverDistrict")}
                      className="select appearance-none"
                    >
                      <option disabled={true}>Select Receiver Districts</option>
                      {handleDistricts(receiverDistrict).map((district, i) => (
                        <option key={i}>{district}</option>
                      ))}
                    </select>
                  </div>
                </fieldset>
                <div className="flex flex-col w-full mt-3">
                  <label className="label text-black mb-1 font-normal text-sm">
                    Receiver Address
                  </label>
                  <input
                    type="text"
                    className="input outline-0 w-full"
                    placeholder="Enter Receiver Address"
                  />
                </div>

                <div className="flex flex-col w-full mt-3">
                  <label className="label text-black mb-1 font-normal text-sm">
                    Receiver Instruction
                  </label>
                  <textarea
                    className="textarea w-full"
                    placeholder="Receiver Instruction"
                  ></textarea>
                </div>
              </div>
            </div>
            <h3>* PickUp Time,4pm-7pm,Approx.</h3>
            <button className="btn mt-5 bg-[#CAEB66]">
              Proceed to Confirm Booking
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SendParcel;
