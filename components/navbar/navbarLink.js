import React from "react";

export default class NavbarLink extends React.Component {
    render() {
      return(
          this.props.active ?
            (<span className="font-bold px-8 py-4 border-b-4 border-sky-700 cursor-pointer">{ this.props.children }</span>)
            :
            (<span className="font-bold px-8 py-4 border-b-4 border-white hover:border-sky-700 cursor-pointer">{ this.props.children }</span>)
      );
    }
  }