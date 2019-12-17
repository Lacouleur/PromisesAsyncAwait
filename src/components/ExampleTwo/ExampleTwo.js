import React, { useState, useEffect } from "react";
import "./exampleTwo.scss";
import { light} from './helper'
// import { first, second, third, forth, fifth } from './helper'
// export const createDiv = (int) => {
//   return new Promise((resolve, reject) => {
//     if (int === 1) {
//       setLight1("light");
//       resolve();
//     } else if (int === 2) {
//       setLight2("light");
//       resolve();
//     } else if (int === 3) {
//       setLight3("light");
//       resolve();
//     } else if (int === 4) {
//       setLight3("light");
//       resolve();
//     } else if (int === 5) {
//       setLight3("light");
//       resolve();
//     } else {
//       reject(console.error("thrown an error in creatDiv Method"));
//     }
//   });
// };


const ExampleTwo = () => {

  const [light1, setLight1] = useState("");
  const [light2, setLight2] = useState("");
  const [light3, setLight3] = useState("");
  const [light4, setLight4] = useState("");
  const [light5, setLight5] = useState("");
  const [done, setDone] = useState("");



  useEffect(() => {

    document.title = `Promises-Example2`;
  });


  const run = () => {
    const PromisesOrder = [light(1000, setLight1), light(300, setLight2), light(600, setLight3), light(400, setLight4), light(500, setLight5)]
    Promise.all(PromisesOrder)
      .then((results) => {
        console.log(results)
        }
      )
      .catch ((err) => console.log('Something get wrong'))

  }

  // const lightSwitch = (bool, id) {

  //   bool === true ? {const light = `light${id}`} ! {const light = `light${id}`}

  // }





  return (
    <div>
      <p className="text"> ExampleTwo </p>
      <div className="dotsBox">
        <div onClick={run} className={`dotsBox-dotsBig dotsBox-dotsBig-red-${light1}`}>
          <p className="text text1"> 1 </p>
        </div>
        <div className={`dotsBox-dots dotsBox-dots-yellow-${light2}`}>
          <p className="text text2"> 2 </p>
        </div>
        <div className={`dotsBox-dotsBig dotsBox-dotsBig-green-${light3}`}>
          <p className="text text3"> 3 </p>
        </div>
        <div className={`dotsBox-dots dotsBox-dots-yellow-${light4}`}>
          <p className="text text4"> 4 </p>
        </div>
        <div className={`dotsBox-dotsBig dotsBox-dotsBig-red-${light5}`}>
          <p className="text text5"> 5 </p>
        </div>
      </div>

    </div>
  );
};

export default ExampleTwo;
