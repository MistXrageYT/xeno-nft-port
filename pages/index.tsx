import { Navbar, Main, Footer } from "../components";
import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="XeNo.NFT: Portfolio"
        description="Welcome to XeNo's Portfolio."
        canonical="https://nine4-2.vercel.app/"
        openGraph={{
          url: "https://nine4-2.vercel.app/",
        }}
      />
      <Head>
        <title>XeNo.NFT: Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="overflow-hidden">
        <div className="relative">
          <div className="gradient-01 z-0" />
          
        </div>
          <Main />

        <div className="relative">
          <div className="gradient-02 z-0" />
          
        </div>
          <Footer />
      </div>
    </div>
  );
}
