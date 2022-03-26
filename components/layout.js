import React from "react";
import Head from "next/head";
import Navbar from "./navbar/navbar";
import Image from "next/image";

export default class Layout extends React.Component {
    render() {
      return(
          <div>
              <Head>
                  {/* Define header image here */}
              </Head>
              <header>
                  <Navbar></Navbar>
                  <Image className="absolute top-0 left-0 z-0" layout="fill" src="/header-image.jpg" />
              </header>
              <main className="mt-96 relative z-10 max-w-4xl mx-auto bg-white">{ this.props.children }</main>
          </div>
      );
    }
  }