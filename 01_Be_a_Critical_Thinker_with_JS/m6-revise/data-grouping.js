const survey = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
  "E",
  "B",
  "C",
  "D",
  "D",
  "E",
  "B",
  "C",
  "D",
  "A",
  "B",
  "C",
];

const group = {};
for (const element of survey) {
//   if (!group[element]) group[element] = 0;
//   group[element] += 1;
group[element] = (group[element] || 0) + 1
}
console.log(group);