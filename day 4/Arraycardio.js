const inventors = [
    {firstName: 'Albert', lastName: 'Einstein', year: 1828, passed: 1953},
    {firstName: 'Isaac', lastName: 'Newton', year: 1628, passed: 1753},
    {firstName: 'Galileo', lastName: 'Galilei', year: 1564, passed: 1713},
    {firstName: 'Marie', lastName: 'Curie', year: 1867, passed: 1943},
    {firstName: 'Nicolaus', lastName: 'Copernicus', year: 1473, passed: 1553}
]
const people = ['David, Arthur', 'Bernard, Adomah', 'Kwame, Adom', 'David, Shalom', 'Desmond, Dornu'];
//Array.filter()
const years = inventors.filter(inventor=> inventor.year > 1500 && inventor.year < 1600);
// console.log(years);
//Array.map()
const names = inventors.map(inventor => inventor.firstName + ' ' + inventor.lastName);
// console.log(names);
//Array.sort();
const sort = inventors.sort((a,b)=> a.year > b.year ? 1 : -1);
console.table(sort);