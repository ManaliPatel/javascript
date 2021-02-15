
const person = {
    name: 'Jimmy Smith',
    age: 40,
    hairColor: 'brown',
    eyeColor: 'blue'
};

const careerData = {
    title: 'developer',
    company: 'ABC Software'
};

const personWithCareerData = {
    ...person,
    ...careerData,
};

console.log(personWithCareerData)

const numbers = [1,2,3,4,5];
const newNumbers = [
    ...numbers,
    6,
];

console.log(newNumbers)
