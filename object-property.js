const students = [
    {id: 33, Name: 'Manna'},
    {id: 44, Name: 'Bapparaj'},
    {id: 55, Name:  'Omor Sunny'},
    {id: 69, Name: 'Dipjol'},
];

const Names = students.map(s => s.Name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id<40);
const biggerOne = students.find(s => s.id>50);
console.log(biggerOne);