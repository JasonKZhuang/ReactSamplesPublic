import React from "react";

function Footer({ obj }) {
  return (
    <div className="w-full p-5 text-3xl text-white bg-blue-500">
      This is Footer from home container <b>{obj.name}</b>
    </div>
  );
}

export default Footer;
