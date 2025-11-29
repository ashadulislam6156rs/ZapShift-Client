import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Componants/Loading/Loading';

const Payment = () => {

    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    // console.log(id);
    

    const { data: parcel = [], isLoading } = useQuery({
      queryKey: ["payment", id],
      queryFn: async () => {
        const res = await axiosSecure.get(`/payment/${id}`);
        return res.data;
      },
    });

    if (isLoading) {
        return <Loading></Loading>
    }

  
  const handleCrediteCardPayment = async () => {
    const paymentInfo = {
      parcelName: parcel.parcelName,
      totalCost: parcel.totalCost,
      senderEmail: parcel.senderEmail,
      parcelId: parcel._id,
    };
    const data = await axiosSecure.post("/create-checkout-session", paymentInfo)
    
    window.location.href = data.data.url;
    
  }
   
    

      return (
        <div>
          <h1 className="text-2xl font-semibold text-center py-5">
            Please Select Payment Method
          </h1>
          <div className="flex gap-40 items-center mt-5">
            <div>
              <strong className="block">
                Percel Title:{" "}
                <span className="font-normal text-sm">{parcel.parcelName}</span>
              </strong>
              <strong className="block">
                Parcel Cost:{" "}
                <span className="font-normal text-sm">${parcel.totalCost}</span>
              </strong>
            </div>

            <button
              onClick={handleCrediteCardPayment}
              className="btn btn-md btn-primary ml-5"
            >
              Credit Card
            </button>
          </div>
        </div>
      );
};

export default Payment;