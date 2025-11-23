import React from 'react';
import { Link, Outlet } from 'react-router';
import Logo from '../Componants/Logo';
import Container from '../Componants/Container/Container';
import authImg from "../assets/authImage.png";
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
      <div>
        <Container>
          <div className="flex min-h-screen">
            <div className="flex-1">
              <div className="py-3">
                <Link to={"/"}>
                  <Logo></Logo>
                </Link>
              </div>
              <div className="flex items-center min-h-screen">
                <Outlet></Outlet>
              </div>
            </div>
            <div className="bg-[#F2FADA] flex-1 flex justify-center items-center">
              <img src={authImg} alt="" />
            </div>
          </div>
        </Container>
        <ToastContainer />
      </div>
    );
};

export default AuthLayout;