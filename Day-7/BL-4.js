//1. Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900

function radomInTwoRange(min1, max1, min2, max2) {
  var ranges = [
    {
      min: -100,
      max: 0,
    },
    {
      min: 800,
      max: 900,
    },
  ];

  ranges.forEach((e) => {
    console.log(Math.floor(Math.random() * (e.max - e.min + 1) + e.min));
  });
}
radomInTwoRange(-100, 0, 800, 900);
