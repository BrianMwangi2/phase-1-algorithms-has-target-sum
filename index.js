
  // Write your algorithm here
function hasTargetSum(arr, target) {
    // Set to keep track of seen numbers
    let seenNumbers = new Set();

    // Iterate through each number in the array
    for (let num of arr) {
        // Calculate the difference needed to reach the target
        let diff = target - num;

        // Check if the difference is already in the seenNumbers set
        if (seenNumbers.has(diff)) {
            return true; // Found a pair that adds up to the target
        }

        // Add the current number to the seenNumbers set
        seenNumbers.add(num);
    }

    // If no pair was found
    return false;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
