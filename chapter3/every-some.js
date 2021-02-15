
const employee = [
    {
        name: 'Jane Doe',
        salary: 9000,
    },{
        name: 'Donna Appleseed',
        salary: 150000,
    },{
        name: 'John Smith',
        salary: 250000,
    }
];

const makeMoreThanOneMillion = employee => employee.salary > 100000;
const result = employee.some(makeMoreThanOneMillion);
const resultOne = employee.every(makeMoreThanOneMillion);
console.log(resultOne);


const formValues = [
    'Shaun',
    'Wassell',
    'Maine',
    '',
]

const isNotEmpty = string => !!string;
const allFieldsFilled = formValues.every(isNotEmpty);
console.log(allFieldsFilled)