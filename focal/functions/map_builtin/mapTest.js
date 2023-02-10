const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const lightHouseLengths = lighthouses.map(word => word.split(' ').join('').length);

console.log(lightHouseLengths);
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ] //with spaces.
// [14, 12, 10, 15, 9, 10, 10] withtout spaces using split, join and length.
