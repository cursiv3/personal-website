import React from "react";

const Dots = props => {
  let rowWidth = props.data.imageList.length * 20 + 10;
  return (
    <div className="dotsContainer" style={{ width: rowWidth }}>
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
    </div >
  );
};

export default Dots;
