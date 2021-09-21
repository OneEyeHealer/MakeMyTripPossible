import React from "react";

function Article({ day, title, brief }) {
  return (
    <>
      {day ? (
        <article>
          <div className="container pt-3">
            <div className="day-bg">
              <h2 className="day">
                <i className="fad fa-location-arrow" /> &nbsp;
                {day}:
              </h2>
              <span className="brief-desc">{title}</span>
            </div>
            <pre>{brief}</pre>
          </div>
        </article>
      ) : null}
    </>
  );
}

export default Article;
