import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Componants/Navbar/Navbar';
import Footer from '../Componants/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <nav className="w-full mx-auto shadow-lg">
          <Navbar></Navbar>
        </nav>
        <main className="w-full mx-auto bg-[#ebeced] flex-1">
          <Outlet></Outlet>
        </main>
        <footer className="w-full mx-auto bg-[#0B0B0B]">
          <Footer></Footer>
        </footer>
        <ToastContainer />
      </div>
    );
};

export default RootLayout;