import React from "react";

const Container = ({ children, className }) => {
  return (
    <section className={`max-w-7xl mx-auto md:px-7 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
