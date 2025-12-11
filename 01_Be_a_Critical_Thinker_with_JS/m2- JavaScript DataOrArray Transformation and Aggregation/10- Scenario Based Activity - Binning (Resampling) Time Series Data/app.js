const data = [
  30,
  33,
  37,
  41,
  2,
  12,
  5,
  8,
  12,
  15,
  18,
  22,
  27,
  30,
  33,
  37,
  41,
];

// Bin range নির্ধারণ (প্রতিটা bin এর width = 10)
const binSize = 10;

// Function: binning
function binData(data, binSize) {
  const bins = {};

  for (let value of data) {
    // কোন bin এ পড়বে তা নির্ণয়
    const binStart = Math.floor(value / binSize) * binSize; //binStart “কত নাম্বার bin”-এ পড়ে, সেটা সরাসরি বের কre
    const binEnd = binStart + binSize - 1;

    const binLabel = `${binStart}-${binEnd}`; // binLabel is implicit logic here to find out which bin will select

    // ঐ bin এ value রাখো
    if (!bins[binLabel]) {
      bins[binLabel] = [];
    }
    bins[binLabel].push(value); // in here , binLabel is dynamic logic to find out which bin will be select
  }

  return bins;
}

const result = binData(data, binSize);
console.log(result);
