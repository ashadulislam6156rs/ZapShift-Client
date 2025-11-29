import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router";
import { GrView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcel", user?.email],
    queryFn: async () => {
      const data = await axiosSecure.get(`/myParcels?email=${user?.email}`);
      return data.data;
    },
  });

  console.log(parcels);

  // ** Delete parcel
  const handleDeletParcel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/myParcels/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel has been deleted.",
              icon: "success",
            });

            refetch();
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  // ** Edite parcel

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-5">
        My Parcels ({parcels.length})
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Total Cost (৳)</th>
              <th>Payment</th>
              <th>Delivary Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-base-200" : ""}`}
              >
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>
                  {parcel.totalCost}{" "}
                  <span className="text-xl font-semibold">৳</span>
                </td>
                <td>
                  {parcel.paymentStatus === "Paid" ? (
                    <p className="badge badge-success">Paid</p>
                  ) : (
                    <Link
                      to={`/dashboard/payment/${parcel._id}`}
                      className="btn btn-sm bg-[#CAEB66]"
                    >
                      Pay
                    </Link>
                  )}
                </td>
                <td>
                  {parcel.delivaryStatus && (
                    <span className="badge badge-warning">
                      {parcel.delivaryStatus}
                    </span>
                  )}
                </td>
                <td className="space-x-2">
                  <Link
                    title="View Parcel Details"
                    className="btn btn-square hover:bg-[#CAEB66]"
                  >
                    <GrView />
                  </Link>
                  <Link
                    title="Edite Parcel Details"
                    className="btn btn-square hover:bg-[#CAEB66]"
                  >
                    <FaRegEdit />
                  </Link>
                  <button
                    title="Delete Parcel"
                    onClick={() => handleDeletParcel(parcel._id)}
                    className="btn btn-square hover:bg-[#CAEB66]"
                  >
                    <FaRegTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
