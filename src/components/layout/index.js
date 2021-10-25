/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/default */
/* eslint-disable react/prop-types */
/* eslint-disable import/namespace */

import Head from "next/head";
import Footer from "../footer";
import Nav from "../nav";
import { useRef, Fragment, useState, useEffect } from "react";
import { Body, Container } from "../content";

function Layout({ children, title, homepage = false, h3RefHome }) {
  const containerRef = useRef();
  const [positionNav, setPositionNav] = useState("absolute");

  useEffect(() => {
    if (containerRef.current) {
      document.body.onscroll = () => {
        const widthScreen = window.innerWidth;
        widthScreen < 640
          ? setPositionNav("fixed")
          : setPositionNav("absolute");
      };
    }
  });

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Container homepage={homepage} containerRef={containerRef}>
        <Nav h3RefHome={h3RefHome} position={positionNav} />
        <Body homepage={homepage}>{children}</Body>
        <Footer>田中景祐</Footer>
      </Container>
    </Fragment>
  );
}

export default Layout;
