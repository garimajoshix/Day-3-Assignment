// Write a program to print a array of five names in reverses order.

let names = ["Aarohi", "Ayush", "Bhanu", "Chandan", "Dinesh"];

for (let index = 4; index >= 0; index--) {
  console.log(names[index]);
}

// Create a array of  country objects having name capital and population as properties.
// Print the countries whose population is less than 2000

let countries = [
  {
    name: "India",
    capital: "Delhi",
    Population: 2500,
  },
  {
    name: "China",
    capital: "Beijing",
    Population: 2100,
  },

  {
    name: "Japan",
    capital: "Tokyo",
    Population: 1300,
  },

  {
    name: "Russia",
    capital: "Moscow",
    Population: 1200,
  },
];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].Population < 2000) {
    console.log(countries[i].name);
  }
}
