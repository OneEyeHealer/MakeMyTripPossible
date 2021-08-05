import React from "react";
import { statsInfo } from "../Services/StatsService";

function SectionStats({ key, title, count, icon }) {
  return (
    <>
      <section className="stats">
        <div className="container">
          <div className="row text-center">
            {statsInfo.map((info) => (
              <div key={info[key]} className="col-md-3 col-sm-6">
                <div className="counter">
                  <span className={info[icon]}></span>
                  <h3 className="timer count-title count-number">
                    {info[count]}
                  </h3>
                  <p className="count-text">{info[title]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
SectionStats.defaultProps = {
  key: "key",
  title: "title",
  count: "count",
  icon: "icon",
};
export default SectionStats;
