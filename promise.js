const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (category) => {
  let count = 0;
  const theaterVGC = await promiseTheaterVGC();
  const theaterIXX = await promiseTheaterIXX();

  count += theaterVGC.filter(row => row.hasil === category).length;
  count += theaterIXX.filter(row => row.hasil === category).length;

  return count;
};

module.exports = {
  promiseOutput,
};
