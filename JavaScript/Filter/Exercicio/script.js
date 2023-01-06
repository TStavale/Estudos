// Exercicio 1

const list = [20,3,234,12,17,541,6,87,275,1000]; // Apenas números pares divisiveis por 5.

const newList = list.filter((number) => {
    if(number % 2 !== 0) return false
    if(number % 5 !== 0) return false

    return true

    /* Outra forma de fazer seria;
    if(number % 2 === 0 && number % 5 === 0) return true
    else return false
    */
});


console.log(newList);


// Exercicio 2

const companies = [

    {name: 'samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},

]
// Apenas as empresas que foram fundadas depois de 1975 e que tenham mais de 200 milhões de dólares em valor de mercado. 

const newCompanies = companies.filter((company) => {

    return company.foundedOn > 1975 && company.marketValue > 200;
    // Poderia ter feito igual o exercicio 1.
});

console.log(newCompanies);