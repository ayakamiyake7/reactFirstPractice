import React from "react";

export const ColourfulMessage = (props) => {
  const { children, color } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
