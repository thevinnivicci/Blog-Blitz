import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ width = "100px" }) => {
  return (
    <div>
      <Link to={"/"}>
        <h2 className="text-3xl head-font font-semibold text-slate-600">
          Blog <span className="text-slate-500">Blitz</span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
