import Head from "next/head";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
const ipfsClient = require("ipfs-http-client");
const Faq = dynamic(() => import("../components/faq"), { ssr: false });

import Layout from "../components/layout";

export default function LoserBox() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const submitPersonalDetails = async () => {
    try {
      const ipfs = ipfsClient({
        host: process.env.NEXT_PUBLIC_IPFSNODE,
        port: process.env.NEXT_PUBLIC_IPFSPORT,
        protocol: process.env.NEXT_PUBLIC_IPFSPROTOCOL,
      });
      const { cid } = await ipfs.add({
        path: account,
        content: JSON.parse(localStorage.getItem("userDetails")),
      });
      console.log(cid.toString());
      localStorage.clear();
    } catch (error) {
      console.log("Unable to publish to IPFS", error);
    }
  };

  return (
    <Layout noRightButton>
      <Head>
        <title>Recover.ws - Loser Box to protect your item from loss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ paddingTop: 50 }}>
        <div className="row form-group" style={{ padding: ".375rem .75rem" }}>
          <h4>
            <span style={{ color: "#13a2dc" }}>Order</span> Confirmation
          </h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              className="alert btns"
              style={{ background: "#A6FFCC" }}
              role="alert"
            >
              <p style={{ paddingTop: "15px" }}>Your order is on preparation</p>
            </div>
            <Link href="/">
              <button
                className="btn btns"
                onClick={submitPersonalDetails}
                style={{
                  width: "100%",
                  marginTop: "20px",
                  backgroundColor: "#A6FFCC",
                }}
                type="button"
              >
                <strong>Return to the Homepage</strong>
              </button>
            </Link>
            <br /> <br />
          </div>
        </div>
      </div>
    </Layout>
  );
}
