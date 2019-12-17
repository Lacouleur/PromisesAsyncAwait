const delay = time => {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(console.error("That's not a number"));
    } else {
      setTimeout(resolve, time);
    }
  });
};

export default delay; 
