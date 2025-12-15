var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
console.log(Size.Small); // 0
console.log(Size.Medium); // 1

let size = {};
//  size[0] = "Small";
//   let i = size["Small"] =  10
// console.log(i);

size[(size["Small"] = 1)] = "Small";
// size[size["Medium"] = 1] = "Medium";
// size[size["Large"] = 2] = "Large";

// console.log(size);
