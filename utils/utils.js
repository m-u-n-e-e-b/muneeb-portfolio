export const kebabCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

export const kebabArray = (arr) => arr.map((item) => kebabCase(item));

export const randomNumberText = (finalNum, setNumber) => {
  let count = 0;
  let newNum = "";
  const interval = setInterval(() => {
    count++;
    for (let i = 0; i < finalNum.length; i++) {
      newNum += Math.floor(Math.random() * 10);
    }
    setNumber(newNum);
    newNum = "";
    if (count === 20) {
      clearInterval(interval);
      setNumber("404");
    }
  }, 80);
};
