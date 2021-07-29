import React from "react";

function VerticalBlock(props) {
  return (
    <>
      <div className="fetured-info pt-lg-5">
        <div className="row fetured-sec mt-lg-5 mt-3">
          <div className="col-lg-6 p-0">
            <div className="img-effect">
              <img
                src="https://image.freepik.com/free-vector/flat-travel-background_23-2148050086.jpg"
                alt=""
                className="img-fluid image1"
              />
            </div>
          </div>
          <div className="col-lg-6 serv_bottom feature-grids pl-lg-5">
            <div className="featured-left text-left">
              <div className="bottom-gd px-3">
                <span className="fa fa-plane" aria-hidden="true"></span>
                <h3 className="my-4">Ultricies Velit</h3>
                <p>
                  Integer sit amet mattis quam, sit amet ultricies velit.
                  Praesent ullamcorper dui turpis.
                </p>
              </div>
              <div className="bottom-gd fea active p-4" data-aos="fade-left">
                <span className="fa fa-rocket" aria-hidden="true"></span>
                <h3 className="my-3">Mattis Quam</h3>
                <p>
                  Integer sit amet mattis quam, sit amet ultricies velit.
                  Praesent ullamcorper dui turpis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerticalBlock;
