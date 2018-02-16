import React from "react";

const Dots = props => {
  var dotRowWidth = 20 * props.data.imageList.length;
  var margins = Math.round((props.data.carouselWidth - dotRowWidth) / 2);
  return (
    <div className="dotsContainer" style={{ left: margins + 'px' }}>
      {props.data.imageList.map((val, idx) => {
        return idx === props.data.activeDot ? (
          <div
            key={idx}
            className="dots"
            style={{
              backgroundColor: "red",
              boxShadow: "0 0 5px 2px rgba(255,0,0, 0.6)",
              border: 'none'
            }}
          />
        ) : (
            <div
              key={idx}
              className="dots"
              style={{
                backgroundColor: "white"
              }}
            />
          );
      })}
    </div>
  );
};

export default Dots;
