import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLink({ href, children, className, target }) {
  const { pathname } = useLocation();

  const GotoLink = () => {
    document.getElementById("main--nav").style.width = "0%";
  };

  return (
    <>
      <Link
        className={`${className} ${pathname === href && "active"}`}
        to={href}
        onClick={() => GotoLink()}
        target={target}
        rel="noreferrer"
      >
        {children}
      </Link>
    </>
  );
}
