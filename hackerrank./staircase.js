function staircase(n) {
    // Write your code here
    for (let i = 1; i <= n; i++ ){
        console.log(" ".repeat(n-i) + '#'.repeat(i))
    }
}


// print a right-aligned staircase of a certain number of steps, using a specific character.
// expected result 
// Sample Input

// 6 
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
