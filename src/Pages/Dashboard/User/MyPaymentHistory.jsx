import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { GrView } from "react-icons/gr";

const MyPaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: mypayments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  console.log(mypayments);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-5">
        My Payment History: ({mypayments.length})
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>SL.NO.</th>
                <th>Parcel Info</th>
                <th>Transaction Id</th>
                <th>Payment Info</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {mypayments.map((Payment, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{Payment.parcelName}</td>
                  <td>{Payment.transactionId}</td>
                  <td>
                    ${Payment.totalCost}
                    <span> ({Payment.paymentStatus})</span>
                  </td>
                  <td>
                    {" "}
                    <Link
                      title="View Payment Details"
                      className="btn btn-square hover:bg-[#CAEB66]"
                    >
                      <GrView />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPaymentHistory;
