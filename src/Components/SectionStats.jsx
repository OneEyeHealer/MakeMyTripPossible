import React from "react";

function SectionStats(props) {
  return (
    <>
      <section className="stats">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-sm-6">
              <div className="counter">
                <span className="fa fa-briefcase"></span>
                <h3 className="timer count-title count-number">12</h3>
                <p className="count-text">Years Of Experience</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counter">
                <span className="fa fa-user"></span>
                <h3 className="timer count-title count-number">120</h3>
                <p className="count-text">Our Agents</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counter">
                <span className="fa fa-user-circle"></span>
                <h3 className="timer count-title count-number">1280</h3>
                <p className="count-text">Happy Customers</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="counter">
                <span className="fa fa-users"></span>
                <h3 className="timer count-title count-number">10200</h3>
                <p className="count-text">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionStats;
