function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i< array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            console.log('how many time did it loop '+ (i+1));
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds');
}

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla'];
const large = new Array(10000).fill('nemo');

findNemo(large);