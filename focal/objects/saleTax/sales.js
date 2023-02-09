const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
  
const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(companySalesData, salesTaxRates) {
  let results = {};

  companySalesData.forEach((company) => {

    const {name,province, sales} = company;
    const totalSales = sales.reduce((a,b) => a + b);
    const taxRate = salesTaxRates[province];
    const totalTax = totalSales * taxRate;

    if (!results[name]) {
      results[name] = {totalSales, totalTax};
    } else {
      results[name].totalSales += totalSales;
      results[name].totalTax += totalTax;
    }
  });
  return results;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));