const strings = ['a', 'b', 'c', 'd', 'e']; // 20 bytes of storage (4 bytes per character)

console.log(strings[2]); // O(1)


// push (add to the end)
strings.push('f'); // O(1)
console.log('After pushing f: ' + strings); // O(1)


// pop (remove from the end)
strings.pop(); // O(1)
console.log('After poping: '+ strings); // O(1)


//unshift (add to the beginning)
strings.unshift('x'); // O(n) //because we have to shift all the elements to the next index
console.log('After unshifting x: ' + strings); // O(n)


//splice (add in the middle)
strings.splice(2, 0, 'alien'); // O(n) //because we have to shift all the elements to the next index
console.log('After splicing alien: ' + strings); // O(n)


//splice (remove from the middle)
strings.splice(2, 1); // O(n) //because we have to shift all the elements to the next index
console.log('After splicing: ' + strings); // O(n)


// lookup
console.log(strings.indexOf('e')); // O(n) //because we have to loop through the array to find the index of the element










