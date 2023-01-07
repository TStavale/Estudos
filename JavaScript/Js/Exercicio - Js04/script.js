// Exercicio com Map, Filter e Reduce.

const companies = [

    {name: 'samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},

];

const UpdatedCompanyPrices = companies.map((company) => {
    const newPrice = {
        name: company.name, 
        marketValue: company.marketValue + (10 / 100 * company.marketValue), 
        CEO: company.CEO, 
        foundedOn: company.foundedOn
        
    };
    return newPrice
});

console.log(UpdatedCompanyPrices);

const oldCompanies = UpdatedCompanyPrices.filter((company) => {

    return company.foundedOn < 2000
});

console.log(oldCompanies);

const totalValueOfCompanies = oldCompanies.reduce((acc, current) => {
    return acc + current.marketValue
}, 0)

console.log(totalValueOfCompanies);