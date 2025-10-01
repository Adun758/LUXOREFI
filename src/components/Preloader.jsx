import React from "react";
import "./Preloader.css"; // styling

const Preloader = () => {
  return (
    <div className="preloader" style={{background:"#FDF7F3"}}>
      <div className="spinner"></div>
      <h1 style={
 {fontSize:'50px', fontFamily:'sans-seri'}
      }>LUXOREFI...</h1>
    </div>
  );
};

export default Preloader;
