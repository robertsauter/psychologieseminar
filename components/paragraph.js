import React from "react";

export default class Paragraph extends React.Component {

  render() {
    return(
        <div className={`px-5 sm:px-10 md:px-20 lg:px-40 py-10 ${ this.props.background }`}>
            <h2 className="text-xl sm:text-3xl font-bold mb-4">{ this.props.title }</h2>
            { this.props.children }
        </div>
    );
  }
}