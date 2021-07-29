import React from "react";

function HorizontalBlock(props) {
  return (
    <>
      <div className="feature-grids row mt-3 mb-lg-5 mb-3 mt-lg-5 text-center">
        <div className="col-lg-4" data-aos="fade-up">
          <div className="bottom-gd px-3">
            <span className="fa fa-bus" aria-hidden="true"></span>
            <h3 className="my-4">Sit Amet Mattis</h3>
            <p>
              Integer sit amet mattis quam, sit amet ultricies velit. Praesent
              ullamcorper dui turpis.
            </p>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-up">
          <div className="bottom-gd2-active px-3">
            <span className="fa fa-car" aria-hidden="true"></span>
            <h3 className="my-4">Ultricies Velit</h3>
            <p>
              Integer sit amet mattis quam, sit amet ultricies velit. Praesent
              ullamcorper dui turpis.
            </p>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-up">
          <div className="bottom-gd px-3">
            <span className="fa fa-rocket" aria-hidden="true"></span>
            <h3 className="my-4">Amet Mattis Quam</h3>
            <p>
              Integer sit amet mattis quam, sit amet ultricies velit. Praesent
              ullamcorper dui turpis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HorizontalBlock;
