function findNemo(array) {

    for (let i = 0; i< array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            console.log('how many time did it loop '+ (i+1));
        }
    }
}

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla'];
const large = new Array(10000).fill('nemo');

findNemo(large); // O(n) --> Linear Time