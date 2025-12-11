/*{
    input: const data = [
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

    '30-39': [ 30, 33, 37, 30, 33, 37 ],
  '40-49': [ 41, 41 ],
  '0-9': [ 2, 5, 8 ],
  '10-19': [ 12, 12, 15, 18 ],
  '20-29': [ 22, 27 ]
}
*/

function binningData(data, binSize) {
  const bins = {};
  data
    .sort((a, b) => a - b)
    .forEach((element) => {
      const binStartPosition = Math.floor(element / binSize) * binSize; // just like percentage
      const binEndPosition = binStartPosition + binSize - 1;
      const binLabel = `${binStartPosition}-${binEndPosition}`;
      if (!bins[binLabel]) {
        bins[binLabel] = [];
      }
      bins[binLabel].push(element);
    });
    data.push("from function")
  return bins;
}
const data = [30, 33, 37, 41, 2, 12, 5, 8, 12, 15, 18, 22, 27, 30, 33, 37, 41];
console.log(binningData(data, 10));
console.log(data); // mutable/reference mean in js its universal raw