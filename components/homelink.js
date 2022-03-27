import React from "react";
import Link from "next/dist/client/link";

export default class HomeLink extends React.Component {

  render() {
    return(
        <Link href="/">
            <a className="mr-12 text-sky-700 text-xl font-extrabold border-b-8 border-sky-700">RobMagazin</a>
        </Link>
    );
  }
  }