import React from "react";
import HomeLink from "../homelink";
import NavbarLink from "./navbarLink";

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpened: false,
    }
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({ mobileMenuOpened: !this.state.mobileMenuOpened });
  }

  render() {
    return(
        <div className="flex flex-col lg:flex-row lg:items-center fixed w-full top-0 left-0 px-4 sm:px-20 z-20 bg-white">
            <div className="flex py-2 justify-between items-center">
              <HomeLink></HomeLink>
              <svg onClick={ this.toggleMobileMenu } xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <div className={`${ this.state.mobileMenuOpened ? 'flex' : 'hidden lg:flex' } flex-col lg:flex-row lg:items-center justify-around w-full`}>
                <NavbarLink>Informatik</NavbarLink>
                <NavbarLink active>Psychologie</NavbarLink>
                <NavbarLink>Wirtschaft</NavbarLink>
            </div>
        </div>
    );
  }
  }