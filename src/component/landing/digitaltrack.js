import React from "react";

const Digitaltrack = ({ digitalTrack }) => {
  return (
    <div className="digital-marque-sec">
      <div className="container">
        <div className="digital-marque">
          <div className="marquee">
            <div className="track">
              <div className="content">
                <h1>
                  {digitalTrack?.tracks?.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digitaltrack;
