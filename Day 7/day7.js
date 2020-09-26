const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function printEvenNumber(numberEven){
    console.log(numberEven)
}
function filterEven(arrNumber, callBackFunc) {
    const newArr = arrNumber.filter(item => item % 2 === 0);
    return callBackFunc(newArr)
}
filterEven(arr, printEvenNumber)

var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(max)
