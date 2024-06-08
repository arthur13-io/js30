const people = [
    {
        name: 'David', 
        year: 2000
    },
    {
        name: 'Desmond', 
        year: 1999
    },
    {
        name: 'Jedges', 
        year: 2003
    },
    {
        name: 'Mom', 
        year: 1971
    }
];

const comments = [
    {
        text: 'Love this',
        id: 523423
    },
    {
        text: 'Super good',
        id: 823423
    }, {
        text: 'Suiiiii',
        id: 65523423
    }, {
        text: 'Gcb3 is the greatest food ever',
        id: 44523423
    }, {
        text: 'Nice Nice Stuff',
        id: 9023423
    }
];

/*Some method*/
const isAdult = people.some(person=> {
    const date = new Date().getFullYear();
    if(date - person.year >= 20 ){
        return person.name;
    }
});
// console.log(isAdult);

/*every method*/
const every = people.every(person=> {
    return (new Date().getFullYear()) - person.year;
})
// console.log({every});

/*find method */
const find = people.find(person=>{
    return person.year === 2003;
})
// console.log({find});

/*find Index */
const findIndex = comments.findIndex(index =>{
    return index.id === 823423;
})
console.log({findIndex});