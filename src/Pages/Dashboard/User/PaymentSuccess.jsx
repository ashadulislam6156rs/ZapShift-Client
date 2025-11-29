import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
   const [searchParams] = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const [paymentInfo, setPaymentInfo] = useState({});
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
      if (sessionId) {
          axiosSecure.patch(`/payment/success?session_id=${sessionId}`)
            .then((res) => {
                console.log(res.data);
                
              
              setPaymentInfo({
                trackingId: res.data.trackingId,
                transactionId: res.data.transactionId,
              });
          })
      }
    }, [sessionId, axiosSecure]);


    return (
      <div>
        <h1>Your Payment Success</h1>
        <h2>TrackingId Id: {paymentInfo.trackingId}</h2>
        <h2>Transaction Id: {paymentInfo.transactionId}</h2>
      </div>
    );
};

export default PaymentSuccess;