const createDiv = (
    color,
    setLightRed,
    setLightYellow,
    setLightGreen,
    setStart,
    setResolve,
    setDone
    ) => {
    return new Promise((resolve, reject) => {
        console.log('creat div', color);
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

  export default createDiv;