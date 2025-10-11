import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Counters from "./Counters.jsx";
import Gallery from "./Gallery.jsx";

const Button = styled.button`
  color: limegreen;
  border: 2px solid limegreen;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border-radius: 3px;

  &:hover {
    opacity: 0.9;
  }
`;

const Homes = () => {
  return (
    <>
      <div
        id="intro-example"
        className="mx-5 p-5 text-center bg-image"
        style={{
          backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')`,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
              <h5 className="mb-4">
                Best & free guide of responsive web design
              </h5>
              <a
                data-mdb-ripple-init
                className="btn btn-outline-light btn-lg m-2"
                href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                role="button"
                rel="nofollow"
                target="_blank"
              >
                Start tutorial
              </a>
              <a
                data-mdb-ripple-init
                className="btn btn-outline-light btn-lg m-2"
                href="https://mdbootstrap.com/docs/standard/"
                target="_blank"
                role="button"
              >
                Download MDB UI KIT
              </a>
            </div>
          </div>
        </div>
      </div>
      <Counters
        name="Ifeanyi Anene"
        email="Anene.ifeanyi@yahoo.com"
        phone="+2349025762574"
        address="Lagos, Nigeria magodo phase one"
      />
      <Gallery />

      <div>
        <Button>Click me</Button>
      </div>

     
    </>
  );
};

export default Homes;
