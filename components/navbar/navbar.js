import React from "react";
import NavbarLink from "./navbarLink";

export default class Navbar extends React.Component {
    render() {
      return(
          <div className="flex items-center fixed w-full top-0 left-0 px-20 z-20 bg-white">
              <div className="py-4">
                <span className="mr-12 text-sky-700 text-xl font-extrabold border-b-8 border-sky-700">RobMagazin</span>
              </div>
              <div className="flex items-center justify-around w-full">
                  <NavbarLink>Informatik</NavbarLink>
                  <NavbarLink active>Psychologie</NavbarLink>
                  <NavbarLink>Wirtschaft</NavbarLink>
              </div>
          </div>
      );
    }
  }