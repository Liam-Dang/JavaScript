function boo(n) {
    for (let i =0; i < n.length; i++) { // O(n)
        console.log('boo!'); // O(1)
    }
}
boo([1,2,3,4,5]);



function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) { // O(n)
        hiArray[i] = 'hi'; // O(n)
    }
    return hiArray;
}
console.log(arrayOfHiNTimes(6));

