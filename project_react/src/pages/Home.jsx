import React from 'react'
import { Link } from 'react-router-dom'

const Homes = () => {
  return (
    <>
    <div
        id="intro-example"
        className="p-5 text-center bg-image"
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
      
    </>
  )
}

export default Homes
