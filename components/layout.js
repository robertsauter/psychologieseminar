import React from "react";
import Head from "next/head";
import Navbar from "./navbar/navbar";
import Image from "next/image";
import Link from "next/link";
import HomeLink from "./homelink";

export default class Layout extends React.Component {
    render() {
      return(
          <div className="bg-gray-200">
              <Head>
                  <title>RobMagazin</title>
                  <link rel="icon" href="/icon.png" />
              </Head>
              <header>
                <Navbar></Navbar>
                <Image className="absolute top-0 left-0 z-0" layout="fill" src="/header-image.jpg" alt="phone-background" />
              </header>
              <main className="mt-96 relative z-10 max-w-4xl mx-auto">{ this.props.children }</main>
              <footer className="px-4 sm:px-20 bg-gray-100 flex py-12 items-center justify-between">
                <HomeLink></HomeLink>
                <Link href="/imprint">
                    <a className="hover:text-gray-500">Impressum</a>
                </Link>
              </footer>
          </div>
      );
    }
  }