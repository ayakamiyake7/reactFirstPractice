import React, { useEffect, useState } from "react";
import { ColourfulMessage } from "./components/ColourfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [FaceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountup = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!FaceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        FaceShowFlag || setFaceShowFlag(true);
      } else {
        FaceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ fontWeight: "bold", color: "pink" }}>Hello</h1>
      <ColourfulMessage color="blue">FINE?</ColourfulMessage>
      <ColourfulMessage color="orange">OK</ColourfulMessage>
      <button onClick={onClickCountup}>Count up</button>
      <p>{num}</p>

      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      {FaceShowFlag && <p>😊</p>}
    </>
  );
};

export default App;
