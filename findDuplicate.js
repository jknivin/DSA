//findDuplicate

//You have been given an integer array/list(ARR) of size N which contains numbers 
// from 0 to (N - 2). Each number is present at least once. That is, if N = 5, the
// array/list constitutes values ranging from 0 to 3 and among these, there is a 
// single integer value that is present twice. You need to find and return that duplicate number present in the array.


// brute force TC - O(N2) , SC - O(1)

// var findDuplicate = function(numbers){

//     let len =  numbers.length;

//     for(let i =0 ; i<len ; i++){
//         for (let j = i+1 ; j<len ;j++){
//             if(numbers[i] == numbers[j]){
//                 return numbers[i];
//             }
//         }
//     }
// }


// using hashing TC - O(N) SC - O(N)

// var findDuplicate = function(numbers){

//     var set =  new Set();

//     for(let i = 0; i<numbers.length ; i++){
//         if(set.has(numbers[i])){
//             return numbers[i];
//         }
//         set.add(numbers[i]);
//     }
// }

// optimal solution Floyd's algorithm 

// var findDuplicate = function(numbers){

//     let fast = 0;
//     let slow = 0;

//     do{
//         slow = numbers[slow];
//         fast = numbers[numbers[fast]];
//     }while(slow != fast);

//     slow = 0;

//     while(slow != fast){
//         slow = numbers[slow];
//         fast = numbers[fast];
//     }

//     return slow;

// }

// By Marking the indexes TC - O(N) SC - O(1)

var findDuplicate = function(arr){

    for(let val of arr){
        val = Math.abs(val);
        if(arr[val] < 0){
            return val;
        }

        arr[val] *= -1;
    }

}

let numbers = [4,1,4,3,2]
console.log(findDuplicate(numbers))