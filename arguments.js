function add(num1, num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2];
}
const result = add(2, 3, 8, 2);
console.log(result);