import React, { useState, useEffect  } from "react";
import delay from '../../functions/delay';
import "./exampleOne.scss";

const ExampleOne = () => {

  const [lightRed, setLightRed] = useState("");
  const [lightYellow, setLightYellow] = useState("");
  const [lightGreen, setLightGreen] = useState("");
  const [start, setStart] = useState("");
  const [resolve, setResolve] = useState("");
  const [done, setDone] = useState("");

  useEffect (() => {
    document.title = `Promises-Example1`;
  });
  

  const newPromise = async () => {
    createDiv("red")
    .then(() => delay(3000))
    .then(() => createDiv("yellow"))
    .then(() => delay(4000))
    .then(() => createDiv("green"))
    .then(() => delay(6000))
    .then(() => {
      setLightRed("");
      setLightGreen("");
      setLightYellow("");
      setDone("");
    })
    .then(console.log("Cleaned"))
    .catch(err => console.log(err));
};
/*
const newPromise = async () => {   

  await createDiv("red");
  await delay(3000);
  await createDiv("yellow");
  await delay(4000);
  await createDiv("green");
  await delay(6000);
  await (() => {
      setLightRed("");
      setLightGreen("");
      setLightYellow("");
      setDone("");
    })
    .then(console.log("Cleaned"))
    .catch(err => console.log(err));
};
*/

const createDiv = ( color ) => {
  return new Promise((resolve, reject) => {
    if (color === "red") {
      setLightRed("light");
      setStart("Starting");
      resolve();
    } else if (color === "yellow") {
      setLightYellow("light");
      setResolve("Resolving");
      setStart("");
      resolve();
    } else if (color === "green") {
      setLightGreen("light");
      setDone("Done");
      setResolve("");
      resolve();
    } else {
      reject(console.error("thrown an error in creatDiv Method"));
    }
  });
};

  return (
    <div>
      <p className="text"> click on the first circle to run a Promise </p>

      <div className="dotBox">
        <div
          onClick={newPromise}
          className={`dotBox-dotBig dotBox-dotBig-red-${lightRed}`}
        />
        <div className={`dotBox-dot dotBox-dot-yellow-${lightYellow}`} />
        <div
          className={`dotBox-dotBig dotBox-dotBig-green-${lightGreen}`}
        />
      </div>

      <div className="textContainer">
        <div className="textContainer-text1">
          {start.length > 0 && (
            <p className="textContainer-text">{start}</p>
          )}
        </div>
        <div className="textContainer-text2">
          {resolve.length > 0 && (
            <p className="textContainer-text">{resolve}</p>
          )}
        </div>
        <div className="textContainer-text3">
          {done.length > 0 && (
            <p className="textContainer-text textContainer-text-done">
              {done}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExampleOne;
