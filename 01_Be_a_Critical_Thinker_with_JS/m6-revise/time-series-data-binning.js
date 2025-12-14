//? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

function eventsBin(events, diff) {
  const bins = {};
  for (const {timestamp} of events) {
    const times = new Date(timestamp).getTime();
    const size = diff * 60 * 1000;
    const binStart = Math.floor(times / size) * size;
    const binLabel = new Date(binStart).toISOString();
    if (!bins[binLabel]){ bins[binLabel] = { total: 0 };}
    bins[binLabel].total += 1;
  }
  console.log(bins);
}

//? Output
// binnedEvents = {
//"2025-10-22T10:00:00.000Z": { "total": 3},
//"2025-10-22T10:30:08.000Z": { "total": 2},
//"2025-18-22T11:00:08.000Z": { "total": 1 }
// }
eventsBin(events,30)