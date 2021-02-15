const employee = [{
    name: 'John Olsen',
    age: 54,
    jobTitle: 'developer',
    salary: 70000,
},{
    name: 'Karen Norris',
    age: 34,
    jobTitle: 'engineer',
    salary: 75000,
},{
    name: 'manali patel',
    age: 1,
    jobTitle: 'secretary',
    salary: 5000
},
{
    name: 'Karen Norris One',
    age: 14,
    jobTitle: 'developer',
    salary: 175000,
}
]

const developers = employee.filter(employee => 
    employee.jobTitle == 'developer');

const developerSalaries = developers.map(developer => developer.salary);
const totalDeveloperSalaries = developerSalaries.reduce((acc, x) => acc + x, 0);
const averageDeveloperSalary = totalDeveloperSalaries / developerSalaries.length;
console.log(averageDeveloperSalary)

const nonDevelopers = employee.filter(employee => 
    employee.jobTitle !== 'developer');
const nonDevelopersSalaries = nonDevelopers.map(nonDev => nonDev.salary);
const totalnonDeveloperSalaries = nonDevelopersSalaries.reduce((acc,x) => acc + x,0);
const averageNonDevSalary = totalnonDeveloperSalaries / nonDevelopersSalaries.length;
console.log(averageNonDevSalary)