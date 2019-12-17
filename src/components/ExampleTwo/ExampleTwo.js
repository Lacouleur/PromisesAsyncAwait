import React, { useState, useEffect } from "react";
import delay from '../../functions/delay';
import "./exampleTwo.scss";

const ExampleTwo = () => {

  const [light1, setLight1] = useState("");
  const [light2, setLight2] = useState("");
  const [light3, setLight3] = useState("");
  const [light4, setLight4] = useState("");
  const [light5, setLight5] = useState("");
  const [lightYellow, setLightYellow] = useState("");
  const [lightGreen, setLightGreen] = useState("");
  const [start, setStart] = useState("");
  const [resolve, setResolve] = useState("");
  const [done, setDone] = useState("");

useEffect (() => {

  document.title = `Promises-Example2`;
});

const First = async () => {
  delay(1000)
  .then(() => createDiv(1) )
};

const Second = async () => {
  createDiv(2)
  .then(() => delay(3500))
};

const Third = async () => {
  createDiv(3)
  .then(() => delay(3000))
};

const Forth = async () => {
  createDiv(4)
  .then(() => delay(1500))
};

const fifth = async () => {
  createDiv(5)
  .then(() => delay(2000))
};

const createDiv = ( int ) => {
  return new Promise((resolve, reject) => {
    if (int === 1) {
      setLight1("light");
      resolve();
    } else if (int === 2) {
      setLight2("light");
      resolve();
    } else if (int === 3) {
      setLight3("light");
      resolve();
    } else {
      reject(console.error("thrown an error in creatDiv Method"));
    }
  });
};


  return (
    <div>
      <p className="text"> ExampleTwo </p>
      <div className="dotBox">
      <div onClick={First} className={`dotBox-dotBig dotBox-dotBig-red-${light1}`}>
      <p className="text text1"> 1 </p>
      </div>
      <div className={`dotBox-dot dotBox-dot-yellow-${light2}`}>
      <p className="text text2"> 2 </p>
      </div>
      <div className={`dotBox-dotBig dotBox-dotBig-green-${light3}`}>
      <p className="text text3"> 3 </p>
      </div>
      <div className={`dotBox-dot dotBox-dot-yellow-${light4}`}>
      <p className="text text4"> 4 </p>
      </div>
      <div className={`dotBox-dotBig dotBox-dotBig-red-${light5}`}>
      <p className="text text5"> 5 </p>
      </div>
      </div>

    </div>
  );
};

export default ExampleTwo;
